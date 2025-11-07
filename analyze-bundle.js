import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.join(__dirname, 'dist')

function getDirectorySize(dirPath) {
  let totalSize = 0
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath)
    } else {
      totalSize += stats.size
    }
  })

  return totalSize
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

function analyzeBundle() {
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build directory not found. Run "npm run build" first.')
    return
  }

  console.log('\n📊 Bundle Analysis\n')
  console.log('='.repeat(50))

  const totalSize = getDirectorySize(distPath)
  console.log(`\n📦 Total Bundle Size: ${formatBytes(totalSize)}`)

  // Analyze assets folder
  const assetsPath = path.join(distPath, 'assets')
  if (fs.existsSync(assetsPath)) {
    console.log('\n📁 Assets Breakdown:')
    
    const jsPath = path.join(assetsPath, 'js')
    const cssPath = path.join(assetsPath, 'css')
    
    if (fs.existsSync(jsPath)) {
      const jsSize = getDirectorySize(jsPath)
      console.log(`  JavaScript: ${formatBytes(jsSize)}`)
    }
    
    if (fs.existsSync(cssPath)) {
      const cssSize = getDirectorySize(cssPath)
      console.log(`  CSS: ${formatBytes(cssSize)}`)
    }

    // List all files in assets
    console.log('\n📄 Asset Files:')
    const files = fs.readdirSync(assetsPath, { recursive: true })
    files.forEach(file => {
      const filePath = path.join(assetsPath, file)
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size
        console.log(`  ${file}: ${formatBytes(size)}`)
      }
    })
  }

  console.log('\n' + '='.repeat(50))
  console.log('\n✅ Analysis complete!\n')

  // Performance recommendations
  if (totalSize > 500 * 1024) {
    console.log('⚠️  Bundle size is over 500KB. Consider:')
    console.log('   - Code splitting')
    console.log('   - Lazy loading components')
    console.log('   - Tree shaking unused code')
  } else {
    console.log('✅ Bundle size is optimized!')
  }
  console.log('')
}

analyzeBundle()
