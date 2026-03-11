import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'))
const Behance2PDF = lazy(() => import('./pages/Behance2PDF'))
const Behance2PDFPrivacy = lazy(() => import('./pages/Behance2PDFPrivacy'))
const ChatterCards = lazy(() => import('./pages/ChatterCards'))
const ChatterCardsPrivacy = lazy(() => import('./pages/ChatterCardsPrivacy'))
const ClaudeNarrator = lazy(() => import('./pages/ClaudeNarrator'))
const EtaTube = lazy(() => import('./pages/EtaTube'))
const EtaTubePrivacy = lazy(() => import('./pages/EtaTubePrivacy'))
const FasterUdemy = lazy(() => import('./pages/FasterUdemy'))
const FasterUdemyPrivacy = lazy(() => import('./pages/FasterUdemyPrivacy'))
const LingoDuel = lazy(() => import('./pages/LingoDuel'))
const LingoDuelPrivacy = lazy(() => import('./pages/LingoDuelPrivacy'))
const Serenight = lazy(() => import('./pages/Serenight'))
const SerenightPrivacy = lazy(() => import('./pages/SerenightPrivacy'))
const Subscriptionly = lazy(() => import('./pages/Subscriptionly'))
const SubscriptionlyPrivacy = lazy(() => import('./pages/SubscriptionlyPrivacy'))
const TrueHue = lazy(() => import('./pages/TrueHue'))
const TrueHuePrivacy = lazy(() => import('./pages/TrueHuePrivacy'))
const WDTG = lazy(() => import('./pages/WDTG'))
const WDTGPrivacy = lazy(() => import('./pages/WDTGPrivacy'))
const WDTGSupport = lazy(() => import('./pages/WDTGSupport'))
const WDTGTerms = lazy(() => import('./pages/WDTGTerms'))
const TheHustlerDev = lazy(() => import('./pages/TheHustlerDev'))
const TechStackPicker = lazy(() => import('./pages/thehustlerdev/resources/TechStackPicker'))
const LeetcodePatterns = lazy(() => import('./pages/thehustlerdev/resources/LeetcodePatterns'))
const DesignPatterns = lazy(() => import('./pages/thehustlerdev/resources/DesignPatterns'))
const AIProductivityToolkit = lazy(() => import('./pages/thehustlerdev/resources/AIProductivityToolkit'))
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'))
const BlinkitTeardown = lazy(() => import('./pages/blog/BlinkitTeardown'))
const ZomatoQualityReviews = lazy(() => import('./pages/blog/ZomatoQualityReviews'))
const GoogleSmartShoes = lazy(() => import('./pages/blog/GoogleSmartShoes'))
const ZomatoTextReviews = lazy(() => import('./pages/blog/ZomatoTextReviews'))
const FoodDeliveryResearch = lazy(() => import('./pages/blog/FoodDeliveryResearch'))
const SmyttenReferral = lazy(() => import('./pages/blog/SmyttenReferral'))
const SwiggyDabba = lazy(() => import('./pages/blog/SwiggyDabba'))
const SwiggyLoyalty = lazy(() => import('./pages/blog/SwiggyLoyalty'))
const SwiggyRatingDrop = lazy(() => import('./pages/blog/SwiggyRatingDrop'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Loading() {
  return (
    <div style={{ minHeight: '100vh', background: '#0c0c0c' }} />
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* App landing pages */}
          <Route path="/behance2pdf" element={<Behance2PDF />} />
          <Route path="/behance2pdf/privacy" element={<Behance2PDFPrivacy />} />
          <Route path="/chattercards" element={<ChatterCards />} />
          <Route path="/chattercards/privacy" element={<ChatterCardsPrivacy />} />
          <Route path="/claude-narrator" element={<ClaudeNarrator />} />
          <Route path="/eta-tube" element={<EtaTube />} />
          <Route path="/eta-tube/privacy" element={<EtaTubePrivacy />} />
          <Route path="/faster-udemy" element={<FasterUdemy />} />
          <Route path="/faster-udemy/privacy" element={<FasterUdemyPrivacy />} />
          <Route path="/lingoduel" element={<LingoDuel />} />
          <Route path="/lingoduel/privacy" element={<LingoDuelPrivacy />} />
          <Route path="/serenight" element={<Serenight />} />
          <Route path="/serenight/privacy" element={<SerenightPrivacy />} />
          <Route path="/subscriptionly" element={<Subscriptionly />} />
          <Route path="/subscriptionly/privacy" element={<SubscriptionlyPrivacy />} />
          <Route path="/truehue" element={<TrueHue />} />
          <Route path="/truehue/privacy" element={<TrueHuePrivacy />} />
          <Route path="/wdtg" element={<WDTG />} />
          <Route path="/wdtg/privacy" element={<WDTGPrivacy />} />
          <Route path="/wdtg/support" element={<WDTGSupport />} />
          <Route path="/wdtg/terms" element={<WDTGTerms />} />

          {/* TheHustlerDev */}
          <Route path="/thehustlerdev" element={<TheHustlerDev />} />
          <Route path="/thehustlerdev/resources/tech-stack-picker-2025" element={<TechStackPicker />} />
          <Route path="/thehustlerdev/resources/5-essential-leetcode-patterns" element={<LeetcodePatterns />} />
          <Route path="/thehustlerdev/resources/5-design-patterns-that-changed-my-code-quality" element={<DesignPatterns />} />
          <Route path="/thehustlerdev/resources/ai-productivity-toolkit" element={<AIProductivityToolkit />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/blinkit-app-notification-product-teardown" element={<BlinkitTeardown />} />
          <Route path="/blog/case-study-growing-zomato-quality-reviews" element={<ZomatoQualityReviews />} />
          <Route path="/blog/google-smart-shoes-product-metrics-goals" element={<GoogleSmartShoes />} />
          <Route path="/blog/prd-increasing-zomato-text-reviews" element={<ZomatoTextReviews />} />
          <Route path="/blog/secondary-research-food-delivery-industry-india" element={<FoodDeliveryResearch />} />
          <Route path="/blog/smytten-referral-program-teardown" element={<SmyttenReferral />} />
          <Route path="/blog/swiggy-dabba-customized-meal-plans" element={<SwiggyDabba />} />
          <Route path="/blog/swiggy-enhancing-customer-loyalty-retention" element={<SwiggyLoyalty />} />
          <Route path="/blog/swiggy-root-cause-analysis-play-store-rating-drop" element={<SwiggyRatingDrop />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
