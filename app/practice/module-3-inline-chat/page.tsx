'use client'

import { useEffect, useRef, useState, type PointerEvent } from 'react'

/**
 * MODULE 3: Inline Chat - Edit Mode in Depth
 *
 * This file contains exercises for making precise, surgical edits:
 * - Converting to async/await
 * - Improving accessibility
 * - Refactoring for clarity
 * - Style and performance tweaks
 */

export default function Module3Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 3: Inline Chat - Precision Edits</h1>
          <p className="text-gray-600">Make surgical edits to improve code quality</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔄 LESSON 3.1 - EXERCISE: CONVERT TO ASYNC/AWAIT
           * ==========================================
           *
           * ✅ TODO: REFACTOR THIS TO USE ASYNC/AWAIT
           *
           * Instructions:
           * 1. Highlight the fetchUserData function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Rewrite this to use async/await"
           * 4. Review the patch and accept it
           * 5. Test that it still works correctly
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🔄 Lesson 3.1: Convert to Async/Await</h2>
            <PromiseBasedComponent />
          </section>

          {/* ==========================================
           * ♿ LESSON 3.2 - EXERCISE: IMPROVE ACCESSIBILITY
           * ==========================================
           *
           * ✅ TODO: ADD ACCESSIBILITY FEATURES
           *
           * Instructions:
           * 1. Highlight the InaccessibleForm component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Add aria-labels and make this accessible for screen readers"
           * 4. Review and accept the improvements
           * 5. Ask follow-up: "What other accessibility improvements can be made?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">♿ Lesson 3.2: Improve Accessibility</h2>
            <InaccessibleForm />
          </section>

          {/* ==========================================
           * 🧹 LESSON 3.3 - EXERCISE: REFACTOR FOR CLARITY
           * ==========================================
           *
           * ✅ TODO: BREAK INTO SMALLER FUNCTIONS
           *
           * Instructions:
           * 1. Highlight the MessyComponent function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Break this into smaller functions with clear names"
           * 4. Review the refactored code
           * 5. Ask: "Can this be simplified further?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧹 Lesson 3.3: Refactor for Clarity</h2>
            <MessyComponent />
          </section>

          {/* ==========================================
           * 🎨 LESSON 3.4 - EXERCISE: STYLE AND PERFORMANCE
           * ==========================================
           *
           * ✅ TODO: APPLY MULTIPLE IMPROVEMENTS
           *
           * Try these inline chat commands on the component below:
           * 1. "Convert this to a functional component" (if it was class-based)
           * 2. "Use Tailwind classes instead of inline styles"
           * 3. "Optimize this loop for better performance"
           * 4. "Add TypeScript types for better type safety"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Lesson 3.4: Style & Performance</h2>
            <StylableComponent />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: YOUR TURN
           * ==========================================
           *
           * ✅ TODO: PRACTICE ALL INLINE CHAT TECHNIQUES
           *
           * Instructions:
           * Create your own component below and practice:
           * - Converting callback patterns to async/await
           * - Adding accessibility features
           * - Refactoring complex logic
           * - Improving styling and performance
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a component below and practice all Inline Chat techniques
            </p>

            <DraggablePlayWidget />
          </section>
        </div>
      </div>
    </div>
  )
}

function DraggablePlayWidget() {
  const playgroundRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const pointerSampleRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const velocityRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null)
  const [position, setPosition] = useState({ left: 16, top: 16 })
  const [clicks, setClicks] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['bg-indigo-600', 'bg-emerald-600', 'bg-rose-600', 'bg-amber-600']

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current)
    },
    []
  )

  const throwWidget = () => {
    let velocityX = velocityRef.current.x
    let velocityY = velocityRef.current.y
    if (Math.hypot(velocityX, velocityY) < 0.08) return

    let current = position
    let previousTime = 0
    const animate = (time: number) => {
      const delta = previousTime ? Math.min(time - previousTime, 32) : 16
      previousTime = time
      const bounds = playgroundRef.current?.getBoundingClientRect()
      if (!bounds) return

      const maxLeft = Math.max(0, bounds.width - 176)
      const maxTop = Math.max(0, bounds.height - 136)
      let left = current.left + velocityX * delta
      let top = current.top + velocityY * delta

      if (left < 0 || left > maxLeft) {
        left = Math.max(0, Math.min(left, maxLeft))
        velocityX *= -0.82
      }
      if (top < 0 || top > maxTop) {
        top = Math.max(0, Math.min(top, maxTop))
        velocityY *= -0.82
      }

      current = { left, top }
      setPosition(current)
      const friction = Math.pow(0.995, delta)
      velocityX *= friction
      velocityY *= friction

      if (Math.hypot(velocityX, velocityY) >= 0.025) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        animationFrameRef.current = null
      }
    }
    animationFrameRef.current = requestAnimationFrame(animate)
  }

  const moveWidget = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragStartRef.current || !playgroundRef.current) return

    const now = performance.now()
    const sample = pointerSampleRef.current
    if (sample) {
      const elapsed = Math.max(1, now - sample.time)
      velocityRef.current = {
        x: (event.clientX - sample.x) / elapsed,
        y: (event.clientY - sample.y) / elapsed,
      }
    }
    pointerSampleRef.current = { x: event.clientX, y: event.clientY, time: now }

    const { x, y, left, top } = dragStartRef.current
    const bounds = playgroundRef.current.getBoundingClientRect()
    setPosition({
      left: Math.max(0, Math.min(left + event.clientX - x, bounds.width - 176)),
      top: Math.max(0, Math.min(top + event.clientY - y, bounds.height - 136)),
    })
  }

  return (
    <div
      ref={playgroundRef}
      className="relative h-64 overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-slate-100"
      aria-label="Widget playground"
    >
      <div
        className={`absolute w-44 rounded-xl p-4 text-white shadow-lg transition-colors ${colors[colorIndex]}`}
        style={{ left: position.left, top: position.top }}
        role="group"
        aria-label="Interactive draggable widget"
      >
        <button
          type="button"
          className="mb-3 w-full cursor-grab touch-none rounded bg-black/20 px-2 py-1 text-left text-sm font-semibold active:cursor-grabbing"
          aria-label="Drag widget; use arrow keys to move"
          onPointerDown={event => {
            if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
            velocityRef.current = { x: 0, y: 0 }
            pointerSampleRef.current = {
              x: event.clientX,
              y: event.clientY,
              time: performance.now(),
            }
            dragStartRef.current = {
              x: event.clientX,
              y: event.clientY,
              left: position.left,
              top: position.top,
            }
            event.currentTarget.setPointerCapture(event.pointerId)
          }}
          onPointerMove={moveWidget}
          onPointerUp={() => {
            dragStartRef.current = null
            pointerSampleRef.current = null
            throwWidget()
          }}
          onPointerCancel={() => {
            dragStartRef.current = null
            pointerSampleRef.current = null
            velocityRef.current = { x: 0, y: 0 }
          }}
          onKeyDown={event => {
            const step = 12
            if (event.key === 'ArrowLeft')
              setPosition(current => ({ ...current, left: Math.max(0, current.left - step) }))
            if (event.key === 'ArrowRight')
              setPosition(current => ({
                ...current,
                left: Math.min(
                  (playgroundRef.current?.clientWidth ?? 176) - 176,
                  current.left + step
                ),
              }))
            if (event.key === 'ArrowUp')
              setPosition(current => ({ ...current, top: Math.max(0, current.top - step) }))
            if (event.key === 'ArrowDown')
              setPosition(current => ({
                ...current,
                top: Math.min(
                  (playgroundRef.current?.clientHeight ?? 136) - 136,
                  current.top + step
                ),
              }))
          }}
        >
          Drag me ✋
        </button>
        <p className="mb-3 text-center text-lg font-bold">Clicks: {clicks}</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-white/20 px-2 py-1 text-sm hover:bg-white/30"
            onClick={() => setClicks(count => count + 1)}
          >
            Click!
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-white/20 px-2 py-1 text-sm hover:bg-white/30"
            onClick={() => setColorIndex(index => (index + 1) % colors.length)}
            aria-label="Change widget color"
          >
            🎨 Color
          </button>
        </div>
      </div>
      <p className="absolute bottom-2 right-3 text-xs text-gray-500">
        Drag the handle or use arrow keys
      </p>
    </div>
  )
}

/* ==========================================
 * 🔄 PROMISE-BASED COMPONENT
 * Refactor this to use async/await!
 * ========================================== */
function PromiseBasedComponent() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUserData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const userData = await response.json()
      setData(userData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses .then() chains. Highlight the fetchUserData function and convert it to
        async/await!
      </p>

      <button
        onClick={fetchUserData}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Fetch User Data'}
      </button>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {data && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
        </div>
      )}
    </div>
  )
}

/* ==========================================
 * ♿ INACCESSIBLE FORM
 * Add accessibility features to this form!
 * ========================================== */
function InaccessibleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="space-y-4">
      <p id="contact-form-help" className="text-gray-600">
        Fields marked “required” must be completed.
      </p>

      <form onSubmit={handleSubmit} aria-label="Contact form" aria-describedby="contact-form-help">
        <div>
          <label htmlFor="contact-name">Name (required)</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={e => {
              setFormData({ ...formData, name: e.target.value })
              setSubmitted(false)
            }}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <label htmlFor="contact-email">Email (required)</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value })
              setSubmitted(false)
            }}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <label htmlFor="contact-message">Message (required)</label>
          <textarea
            id="contact-message"
            name="message"
            required
            value={formData.message}
            onChange={e => {
              setFormData({ ...formData, message: e.target.value })
              setSubmitted(false)
            }}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%', minHeight: '100px' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <button
            type="submit"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            style={{
              background: '#3B82F6',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Submit
          </button>
        </div>
        <p role="status" aria-live="polite" className="mt-2">
          {submitted ? 'Form submitted successfully.' : ''}
        </p>
      </form>
    </div>
  )
}

/* ==========================================
 * 🧹 MESSY COMPONENT
 * Refactor this into smaller, clearer functions!
 * ========================================== */
type InventoryItem = {
  id: number
  name: string
  category: 'Fruit' | 'Vegetable'
  price: number
  inStock: boolean
}

type ProcessedInventoryItem = InventoryItem & {
  discountedPrice: number
  formattedPrice: string
  isOnSale: boolean
}

const getInStockItems = (items: InventoryItem[]) => items.filter(item => item.inStock)

const filterItemsByCategory = (items: InventoryItem[], selectedCategory: string) => {
  if (!selectedCategory) return items

  return items.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase())
}

const sortItems = (items: InventoryItem[], currentSort: string) => {
  const sortedItems = [...items]

  if (currentSort === 'price') {
    return sortedItems.sort((a, b) => a.price - b.price)
  }

  return sortedItems.sort((a, b) => a.name.localeCompare(b.name))
}

const addPricingMetadata = (item: InventoryItem): ProcessedInventoryItem => {
  const discountedPrice = item.price > 2 ? item.price * 0.9 : item.price

  return {
    ...item,
    discountedPrice,
    formattedPrice: `$${discountedPrice.toFixed(2)}`,
    isOnSale: item.price > 2,
  }
}

const getProcessedItems = (items: InventoryItem[], selectedCategory: string, currentSort: string) =>
  sortItems(filterItemsByCategory(getInStockItems(items), selectedCategory), currentSort).map(
    addPricingMetadata
  )

const renderItemCard = (item: ProcessedInventoryItem) => (
  <div key={item.id} className="border rounded p-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
      </div>
      {item.isOnSale && (
        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">SALE</span>
      )}
    </div>
    <p className="text-lg font-bold mt-2">{item.formattedPrice}</p>
    {item.isOnSale && (
      <p className="text-xs text-gray-500 line-through">${item.price.toFixed(2)}</p>
    )}
  </div>
)

function MessyComponent() {
  const [items] = useState<InventoryItem[]>([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.5, inStock: true },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.8, inStock: true },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 1.2, inStock: false },
    { id: 4, name: 'Dates', category: 'Fruit', price: 3.0, inStock: true },
  ])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('name')

  const processedItems = getProcessedItems(items, filter, sort)

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component does too much in one place. Highlight it and ask Copilot to break it into
        smaller functions!
      </p>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {processedItems.map(renderItemCard)}
      </div>
    </div>
  )
}

/* ==========================================
 * 🎨 STYLABLE COMPONENT
 * Improve the styling and performance!
 * ========================================== */
const StylableComponent = () => {
  const [count, setCount] = useState(0)

  // Inline styles - convert these to Tailwind!
  const containerStyle = {
    padding: '24px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    marginTop: '16px',
  }

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#3B82F6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '8px',
  }

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
  }

  // This could be optimized - ask Copilot how!
  const expensiveCalculation = () => {
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses inline styles and has performance issues. Improve it!
      </p>

      <div style={containerStyle}>
        <p style={textStyle}>Count: {count}</p>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>
          Expensive calculation: {expensiveCalculation()}
        </p>

        <div style={{ marginTop: '16px' }}>
          <button style={buttonStyle} onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: '#EF4444' }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
