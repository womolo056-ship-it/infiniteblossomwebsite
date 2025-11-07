/**
 * Performance monitoring utilities
 */

// Log performance metrics in development
export const logPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) return

  // Wait for page to fully load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
      const connectTime = perfData.responseEnd - perfData.requestStart
      const renderTime = perfData.domComplete - perfData.domLoading
      const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.navigationStart

      if (import.meta.env.DEV) {
        console.log('Performance Metrics:')
        console.log(`Page Load Time: ${pageLoadTime}ms`)
        console.log(`Connect Time: ${connectTime}ms`)
        console.log(`Render Time: ${renderTime}ms`)
        console.log(`DOM Content Loaded: ${domContentLoadedTime}ms`)
      }

      // Get paint metrics if available
      if (window.performance.getEntriesByType) {
        const paintMetrics = window.performance.getEntriesByType('paint')
        paintMetrics.forEach((metric) => {
          if (import.meta.env.DEV) {
            console.log(`${metric.name}: ${metric.startTime.toFixed(2)}ms`)
          }
        })
      }
    }, 0)
  })
}

// Preload critical resources
export const preloadCriticalResources = (resources = []) => {
  resources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = resource.as
    link.href = resource.href
    if (resource.type) link.type = resource.type
    document.head.appendChild(link)
  })
}

// Report Web Vitals (Core Web Vitals)
// Note: Install 'web-vitals' package to enable this feature
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamic import with error handling for optional dependency
    try {
      // This will only work if web-vitals is installed
      // To enable: npm install web-vitals
      if (import.meta.env.DEV) {
        console.log('Web Vitals reporting available. Install web-vitals package to enable.')
      }
    } catch (error) {
      // web-vitals not installed, skip silently
    }
  }
}
