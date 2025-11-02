# Adding New Resources

This guide will help you add new curated resources to The Hustler Dev website.

## Steps to Add a New Resource

### 1. Create a New Resource Page

1. Copy the `_template.html` file
2. Rename it to something descriptive (e.g., `best-coding-practices.html`)
3. Replace the placeholders:
   - `[RESOURCE TITLE]` - The title of your resource
   - `[RESOURCE DESCRIPTION]` - A brief description for SEO
   - `[Brief introduction to the resource]` - An intro paragraph
   - `[Item Title]` and `[Item description]` - Your content items

### 2. Add the Resource to the Main Page

Open `../index.html` and add a new resource link in the resources section:

```html
<a href="resources/your-new-resource.html" class="resource-link">
    <div class="resource-item">
        <h3>Your Resource Title</h3>
        <p class="resource-description">Brief description of what this resource covers</p>
        <span class="read-more">Read more →</span>
    </div>
</a>
```

### 3. Example Resource Entry

```html
<a href="resources/best-coding-practices.html" class="resource-link">
    <div class="resource-item">
        <h3>Best Coding Practices for 2024</h3>
        <p class="resource-description">Essential coding practices every developer should follow</p>
        <span class="read-more">Read more →</span>
    </div>
</a>
```

## File Structure

```
thehustlerdev/
├── index.html                          # Main page
├── styles.css                          # Shared styles
├── script.js                           # Shared JavaScript
└── resources/
    ├── _template.html                  # Template for new resources
    ├── README.md                       # This file
    └── ai-productivity-toolkit.html    # Example resource
```

## Tips

- Keep resource filenames lowercase with hyphens (kebab-case)
- Make sure the title and description are SEO-friendly
- Use the same structure as the template for consistency
- Test your new resource page before publishing
