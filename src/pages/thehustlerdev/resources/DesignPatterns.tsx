import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'

const patterns = [
  {
    title: '1. Observer Pattern',
    emoji: '\u{1F441}\uFE0F',
    description:
      'Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.',
    whenToUse: [
      'Event handling systems',
      'Data binding in UI frameworks',
      'Real-time notifications',
      'Pub/Sub messaging systems',
      'Model-View updates',
    ],
    advantages: [
      { bold: 'Loose Coupling', rest: ': Subject and observers are loosely coupled' },
      { bold: 'Dynamic Relationships', rest: ': Can add/remove observers at runtime' },
      { bold: 'Broadcast Communication', rest: ': One-to-many communication made easy' },
    ],
    disadvantages: [
      { bold: 'Memory Leaks', rest: ': Observers not properly unsubscribed can cause leaks' },
      { bold: 'Unexpected Updates', rest: ': Can lead to cascading updates' },
      { bold: 'Debugging Complexity', rest: ': Hard to track the flow of notifications' },
    ],
    code: `// Observer Pattern - Event System

// Subject (Observable)
class NewsAgency {
  constructor() {
    this.observers = [];
    this.news = null;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.news));
  }

  setNews(news) {
    this.news = news;
    this.notify();
  }
}

// Observers
class NewsChannel {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(\`\${this.name} received: \${news}\`);
  }
}

// Usage
const agency = new NewsAgency();
const channel1 = new NewsChannel("CNN");
const channel2 = new NewsChannel("BBC");

agency.attach(channel1);
agency.attach(channel2);

agency.setNews("Breaking: Design Patterns are awesome!");`,
  },
  {
    title: '2. Factory Pattern',
    emoji: '\u{1F3ED}',
    description:
      'Define an interface for creating objects, but let subclasses decide which class to instantiate.',
    whenToUse: [
      'Object creation without specifying exact class',
      'Complex initialization logic',
      'Creating different objects based on conditions',
      'Plugin architectures',
      'Managing object pools',
    ],
    advantages: [
      { bold: 'Single Responsibility', rest: ': Object creation logic is separated' },
      { bold: 'Open/Closed Principle', rest: ': Easy to add new types without modifying existing code' },
      { bold: 'Decouples Code', rest: ": Client code doesn't depend on concrete classes" },
    ],
    disadvantages: [
      { bold: 'Added Complexity', rest: ': Can make code more complex with extra classes' },
      { bold: 'More Classes', rest: ': Increases the number of classes to manage' },
    ],
    code: `// Factory Pattern - Vehicle Factory

class Vehicle {
  constructor(model, type) {
    this.model = model;
    this.type = type;
  }

  displayInfo() {
    return \`\${this.type}: \${this.model}\`;
  }
}

class Car extends Vehicle {
  constructor(model) {
    super(model, 'Car');
    this.wheels = 4;
  }

  drive() {
    return \`Driving the \${this.model} car\`;
  }
}

class VehicleFactory {
  static createVehicle(type, model) {
    switch(type.toLowerCase()) {
      case 'car':
        return new Car(model);
      case 'motorcycle':
        return new Motorcycle(model);
      case 'truck':
        return new Truck(model);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

// Usage
const car = VehicleFactory.createVehicle('car', 'Tesla Model 3');
console.log(car.drive()); // Driving the Tesla Model 3 car`,
  },
  {
    title: '3. Singleton Pattern',
    emoji: '\u{1F510}',
    description:
      'Ensure a class has only one instance and provide a global point of access to it.',
    whenToUse: [
      'Database connections',
      'Configuration managers',
      'Logging systems',
      'Caching mechanisms',
      'Thread pools',
      'Device drivers',
    ],
    advantages: [
      { bold: 'Controlled Access', rest: ': Single instance ensures controlled access' },
      { bold: 'Reduced Namespace Pollution', rest: ': No global variables needed' },
      { bold: 'Lazy Initialization', rest: ': Instance created only when needed' },
      { bold: 'Consistent State', rest: ': Shared state across application' },
    ],
    disadvantages: [
      { bold: 'Global State', rest: ': Can introduce global state issues' },
      { bold: 'Testing Difficulties', rest: ': Hard to mock in unit tests' },
      { bold: 'Hidden Dependencies', rest: ': Dependencies are hidden in code' },
      { bold: 'Concurrency Issues', rest: ': Needs special handling in multi-threaded environments' },
    ],
    code: `// Singleton Pattern - Database Connection

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = null;
    this.queries = 0;
    Database.instance = this;
  }

  connect(connectionString) {
    if (!this.connection) {
      this.connection = connectionString;
      console.log(\`Connected to: \${connectionString}\`);
    }
    return this.connection;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Usage
const db1 = new Database();
db1.connect('mongodb://localhost:27017');

const db2 = new Database();
console.log(db1 === db2); // true`,
  },
  {
    title: '4. Strategy Pattern',
    emoji: '\u{1F3AF}',
    description:
      'Define a family of algorithms, encapsulate each one, and make them interchangeable.',
    whenToUse: [
      'Multiple payment methods',
      'Different sorting algorithms',
      'Various compression algorithms',
      'Validation rules',
      'Route planning algorithms',
      'Pricing strategies',
    ],
    advantages: [
      { bold: 'Open/Closed Principle', rest: ': Easy to add new strategies without modifying context' },
      { bold: 'Runtime Switching', rest: ': Can switch algorithms at runtime' },
      { bold: 'Isolates Implementation', rest: ': Algorithm details hidden from client' },
      { bold: 'Eliminates Conditionals', rest: ': Replaces large conditional statements' },
    ],
    disadvantages: [
      { bold: 'Client Awareness', rest: ': Clients must be aware of different strategies' },
      { bold: 'Increased Objects', rest: ': More objects in the system' },
      { bold: 'Communication Overhead', rest: ': Context and strategy must communicate' },
    ],
    code: `// Strategy Pattern - Payment Processing

class PaymentStrategy {
  pay(amount) {
    throw new Error('pay() must be implemented');
  }
}

class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(\`Processing credit card payment...\`);
    return \`Paid $\${amount} with card ending in \${this.cardNumber.slice(-4)}\`;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.paymentStrategy = null;
  }

  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }

  checkout(amount) {
    if (!this.paymentStrategy) {
      throw new Error('Payment strategy not set');
    }
    return this.paymentStrategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment('1234567890123456'));
console.log(cart.checkout(100)); // Paid $100 with card ending in 3456`,
  },
  {
    title: '5. Adapter Pattern',
    emoji: '\u{1F50C}',
    description:
      'Convert the interface of a class into another interface clients expect.',
    whenToUse: [
      'Legacy code integration',
      'Third-party library integration',
      'API versioning',
      'Making incompatible interfaces work together',
      'Wrapping libraries for easier testing',
    ],
    advantages: [
      { bold: 'Single Responsibility', rest: ': Separation of interface conversion from business logic' },
      { bold: 'Open/Closed Principle', rest: ': Can introduce new adapters without changing existing code' },
      { bold: 'Integrates Incompatible Interfaces', rest: ': Makes incompatible classes work together' },
    ],
    disadvantages: [
      { bold: 'Increased Complexity', rest: ': Adds additional layer of abstraction' },
      { bold: 'Sometimes Simpler to Change Service', rest: ': Might be easier to just update the original interface' },
      { bold: 'Performance Overhead', rest: ': Additional indirection can impact performance' },
    ],
    code: `// Adapter Pattern - Payment Gateway Integration

class OldPaymentGateway {
  processOldPayment(accountNumber, amount) {
    console.log(\`[OLD SYSTEM] Processing $\${amount} from account \${accountNumber}\`);
    return {
      success: true,
      transactionId: \`OLD-\${Date.now()}\`
    };
  }
}

class NewPaymentProcessor {
  pay(paymentDetails) {
    throw new Error('pay() must be implemented');
  }
}

class PaymentAdapter extends NewPaymentProcessor {
  constructor(oldGateway) {
    super();
    this.oldGateway = oldGateway;
  }

  pay(paymentDetails) {
    const result = this.oldGateway.processOldPayment(
      paymentDetails.account, 
      paymentDetails.amount
    );
    
    return {
      status: result.success ? 'completed' : 'failed',
      transactionId: result.transactionId
    };
  }
}

// Usage
const oldGateway = new OldPaymentGateway();
const adapter = new PaymentAdapter(oldGateway);

const result = adapter.pay({
  account: '123456',
  amount: 100,
  email: 'customer@example.com'
});

console.log(\`Payment status: \${result.status}\`); // Payment status: completed`,
  },
]

const quickRefRows = [
  { pattern: 'Observer', purpose: 'One-to-many notification', example: 'YouTube notifications when a channel uploads' },
  { pattern: 'Factory', purpose: 'Object creation abstraction', example: 'Document factory creating PDF, Word, or Excel files' },
  { pattern: 'Singleton', purpose: 'Single instance guarantee', example: 'App configuration settings' },
  { pattern: 'Strategy', purpose: 'Interchangeable algorithms', example: 'Google Maps routing (fastest, shortest, avoid highways)' },
  { pattern: 'Adapter', purpose: 'Interface compatibility', example: 'Power adapter for different outlets' },
]

const proTips = [
  { bold: 'Start Simple', rest: ": Begin with Observer and Factory - they're the most commonly used" },
  { bold: "Don't Over-Engineer", rest: ': Use patterns when they solve a real problem, not just because you can' },
  { bold: 'Combine Patterns', rest: ': These patterns often work together (e.g., Factory + Singleton)' },
  { bold: 'Practice', rest: ': Refactor existing code to use these patterns to truly understand them' },
  { bold: 'Know When Not to Use', rest: ': Understanding when NOT to use a pattern is as important as knowing when to use it' },
]

const nextSteps = [
  'Implement these patterns in your current projects',
  'Look for opportunities to refactor existing code',
  'Study other patterns: Decorator, Proxy, Command, Template Method',
  'Read "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four)',
]

export default function DesignPatterns() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui,'-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] leading-relaxed">
      <SEO
        title="5 Design Patterns That Changed My Code Quality - The Hustler Dev"
        description="Master these 5 essential design patterns to write cleaner, more maintainable, and scalable code. Learn the Observer, Factory, Singleton, Strategy, and Adapter patterns with practical JavaScript examples."
        url="https://www.nerdynikhil.com/thehustlerdev/resources/5-design-patterns-that-changed-my-code-quality"
      />

      {/* Header */}
      <header className="bg-white border-b border-[#e0e0e0] py-5 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <Link
            to="/thehustlerdev"
            className="text-[#1a1a1a] no-underline text-sm font-medium hover:opacity-70 transition-opacity"
          >
            &larr; Back to Resources
          </Link>
        </div>
      </header>

      <main>
        <article className="py-15 max-w-[800px] mx-auto px-5">
          <h1 className="text-4xl md:text-[2.5rem] font-semibold mb-4 leading-tight">
            5 Design Patterns That Changed My Code Quality
          </h1>
          <p className="text-xl text-[#666] mb-12 leading-relaxed">
            Master these essential patterns to write cleaner, more maintainable, and scalable code.
          </p>

          {/* Pattern Cards */}
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-[#f8f9fa] rounded-lg p-8 mb-8 border-l-4 border-[#4a6ee0]"
            >
              <h2 className="mt-0 mb-3 text-2xl font-semibold text-[#2c3e50]">
                {pattern.title} {pattern.emoji}
              </h2>
              <p className="text-base leading-relaxed text-[#666] mb-4">{pattern.description}</p>

              <h3 className="mb-4 text-[#4a6ee0] font-semibold text-lg">When to Use</h3>
              <ul className="list-disc pl-6 mb-4 text-[#666]">
                {pattern.whenToUse.map((item) => (
                  <li key={item} className="mb-1">{item}</li>
                ))}
              </ul>

              {/* Advantages */}
              <div className="bg-[#f0f4f8] p-4 rounded mb-4">
                <h4 className="mt-0 mb-2 font-semibold text-[#1a1a1a]">Advantages</h4>
                <ul className="list-disc pl-6 mb-0 text-[#666]">
                  {pattern.advantages.map((adv) => (
                    <li key={adv.bold} className="mb-1">
                      <strong>{adv.bold}</strong>{adv.rest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages */}
              <div className="bg-[#f0f4f8] p-4 rounded mb-4">
                <h4 className="mt-0 mb-2 font-semibold text-[#1a1a1a]">Disadvantages</h4>
                <ul className="list-disc pl-6 mb-0 text-[#666]">
                  {pattern.disadvantages.map((dis) => (
                    <li key={dis.bold} className="mb-1">
                      <strong>{dis.bold}</strong>{dis.rest}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mb-4 text-[#4a6ee0] font-semibold text-lg">Code Example</h3>
              <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded overflow-x-auto text-sm leading-relaxed">
                <code>{pattern.code}</code>
              </pre>
            </div>
          ))}

          {/* Quick Reference Table */}
          <div className="my-12">
            <h2 className="text-2xl font-semibold mb-6">Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-6">
                <thead>
                  <tr>
                    {['Pattern', 'Purpose', 'Real-World Example'].map((header) => (
                      <th
                        key={header}
                        className="bg-[#f2f2f2] p-3 text-left border border-[#ddd] font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quickRefRows.map((row) => (
                    <tr key={row.pattern}>
                      <td className="p-3 border border-[#ddd] font-semibold">{row.pattern}</td>
                      <td className="p-3 border border-[#ddd]">{row.purpose}</td>
                      <td className="p-3 border border-[#ddd]">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="my-12">
            <h2 className="text-2xl font-semibold mb-6">Pro Tips</h2>
            <ol className="list-decimal pl-6 text-[#666] leading-loose">
              {proTips.map((tip) => (
                <li key={tip.bold} className="mb-2">
                  <strong className="text-[#1a1a1a]">{tip.bold}</strong>{tip.rest}
                </li>
              ))}
            </ol>
          </div>

          {/* Next Steps */}
          <div className="my-12">
            <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
            <ul className="list-disc pl-6 text-[#666] leading-loose">
              {nextSteps.map((step) => (
                <li key={step} className="mb-2">{step}</li>
              ))}
            </ul>
            <p className="text-[#666] italic mt-4">
              Remember: Design patterns are tools, not rules. Use them wisely to improve code
              quality, not complicate it!
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#e0e0e0] text-sm text-[#666]">
        <div className="max-w-[1400px] mx-auto px-5">
          <p className="text-base text-[#6e6e73] mb-4">
            Follow{' '}
            <a
              href="https://www.instagram.com/thehustlerdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007aff] no-underline font-medium hover:underline"
            >
              @thehustlerdev
            </a>{' '}
            on Instagram for more tips and resources.
          </p>
          <p className="mt-5">
            <Link
              to="/thehustlerdev"
              className="text-[#6e6e73] no-underline text-sm hover:text-[#007aff]"
            >
              &larr; Back to Resources
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
