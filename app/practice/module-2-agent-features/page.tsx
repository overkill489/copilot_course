'use client'

import { useState } from 'react'

/**
 * MODULE 2: Copilot Chat - Core Agent Features
 *
 * This file contains exercises for:
 * - Fixing broken code (Edit Mode)
 * - Adding new features (Agent Mode)
 * - Writing tests (Agent + Edit Mode)
 * - Freeform conversations (Ask Mode)
 */

export default function Module2Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 2: Core Agent Features</h1>
          <p className="text-gray-600">Fix code, add features, and write tests with Copilot</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔧 LESSON 2.1 - EXERCISE: FIX BROKEN CODE
           * ==========================================
           *
           * ✅ TODO: FIX THE BROKEN CODE BELOW USING /fix
           *
           * Instructions:
           * 1. Highlight the BrokenCalculator component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /fix
           * 4. Review the patch and accept it
           * 5. Follow up with: "Explain what was wrong originally"
           *
           * The code has several intentional bugs - let Copilot find and fix them!
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🔧 Lesson 2.1: Fix Broken Code</h2>
            <BrokenCalculator />
          </section>

          {/* ==========================================
           * ➕ LESSON 2.2 - EXERCISE: ADD A FEEDBACK FORM
           * ==========================================
           *
           * ✅ TODO: ADD A FEEDBACK FORM HERE
           *
           * Instructions:
           * 1. Place your cursor after this comment block
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Create a form with name, email, and message fields"
           * 4. Review the generated code
           * 5. Refine with follow-ups:
           *    - "Style it with Tailwind"
           *    - "Disable submit until all fields are filled"
           *    - "Add validation for email format"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">➕ Lesson 2.2: Add a Feedback Form</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to create a form component below:</p>

            <FeedbackForm />
          </section>

          {/* ==========================================
           * 🧪 LESSON 2.3 - EXERCISE: WRITE TESTS
           * ==========================================
           *
           * ✅ TODO: GENERATE TESTS FOR THE FUNCTION BELOW
           *
           * Instructions:
           * 1. Highlight the calculateDiscount function
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /tests
           * 4. Review the generated test suite
           * 5. Add a new parameter to the function
           * 6. Ask: "Update the tests to cover the new parameter"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧪 Lesson 2.3: Write Tests</h2>
            <TestableComponent />
          </section>

          {/* ==========================================
           * 💬 LESSON 2.4 - EXERCISE: FREEFORM CONVERSATIONS
           * ==========================================
           *
           * ✅ TODO: ASK COPILOT QUESTIONS ABOUT THE CODE BELOW
           *
           * Instructions:
           * 1. Highlight the UserDashboard component
           * 2. Open Copilot Chat (Ctrl/Cmd + Shift + I)
           * 3. Try these Ask Mode questions:
           *    - "What are potential performance issues here?"
           *    - "How would you refactor this into smaller functions?"
           *    - "What security risks might exist in this component?"
           *    - "How can I make this more accessible?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">💬 Lesson 2.4: Freeform Conversations</h2>
            <UserDashboard />
          </section>

          {/* ==========================================
           * 🎨 CHALLENGE: CREATE A PRICING CARD
           * ==========================================
           *
           * ✅ TODO: BUILD A PRICING CARD COMPONENT
           *
           * Instructions:
           * 1. Start simple: "Create a PricingCard with title, price, and description"
           * 2. Iterate and refine:
           *    - "Add a Pro plan that's highlighted"
           *    - "Make the layout responsive on mobile"
           *    - "Add a list of features for each plan"
           *    - "Add hover effects"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Challenge: Pricing Card</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to build a pricing card component:</p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  $9<span className="text-base font-normal text-gray-500">/month</span>
                </p>
                <p className="mt-3 text-gray-600">
                  Get the essentials to start building and exploring at your own pace.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                  <li>• 1 project</li>
                  <li>• Basic analytics</li>
                  <li>• Email support</li>
                </ul>
              </div>

              <div className="max-w-sm rounded-xl border-2 border-blue-500 bg-blue-50 p-6 shadow-md shadow-blue-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200">
                <div className="mb-3 inline-flex rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  $29<span className="text-base font-normal text-gray-500">/month</span>
                </p>
                <p className="mt-3 text-gray-600">
                  Unlock advanced tools, collaboration, and faster shipping for your team.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  <li>• Unlimited projects</li>
                  <li>• Advanced analytics</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function FeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const canSubmit = Boolean(name.trim() && email.trim() && message.trim())

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="feedback-name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="feedback-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={event => {
            setName(event.target.value)
            setSubmitted(false)
          }}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label htmlFor="feedback-email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="feedback-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
            setSubmitted(false)
          }}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label htmlFor="feedback-message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="feedback-message"
          name="message"
          value={message}
          onChange={event => {
            setMessage(event.target.value)
            setSubmitted(false)
          }}
          required
          rows={4}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        disabled={!canSubmit}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send feedback
      </button>
      {submitted && (
        <p role="status" className="text-green-700">
          Thanks for your feedback!
        </p>
      )}
    </form>
  )
}

/* ==========================================
 * 🔧 BROKEN CALCULATOR COMPONENT
 * This component has intentional bugs for you to fix!
 * ========================================== */
function BrokenCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)
  const [error, setError] = useState('')

  const calculate = () => {
    const first = Number(num1)
    const second = Number(num2)
    if (!num1.trim() || !num2.trim() || !Number.isFinite(first) || !Number.isFinite(second)) {
      setError('Enter valid numbers in both fields.')
      return
    }

    setError('')
    setResult(first + second)
  }

  const divide = () => {
    const first = Number(num1)
    const second = Number(num2)
    if (!num1.trim() || !num2.trim() || !Number.isFinite(first) || !Number.isFinite(second)) {
      setError('Enter valid numbers in both fields.')
      return
    }
    if (second === 0) {
      setError('Cannot divide by zero.')
      return
    }

    setError('')
    setResult(first / second)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Number 1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Number 2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="space-x-2">
        <button
          onClick={calculate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={divide}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Divide
        </button>
      </div>

      <p className="text-lg">Result: {result}</p>
      {error && (
        <p className="text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

/* ==========================================
 * 🧪 TESTABLE COMPONENT
 * Use /tests to generate tests for these functions
 * ========================================== */
function TestableComponent() {
  const [price, setPrice] = useState(100)
  const [discount, setDiscount] = useState(10)

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight the calculateDiscount function and use /tests to generate test cases
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Discount %"
          value={discount}
          onChange={e => setDiscount(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-lg">Final Price: ${calculateDiscount(price, discount)}</p>
      </div>

      <div className="p-4 border rounded" aria-label="calculateDiscount test cases">
        <h3 className="font-semibold mb-2">Test cases</h3>
        <ul className="space-y-1">
          {calculateDiscountTests.map(({ name, price, discountPercent, expected }) => {
            const actual = calculateDiscount(price, discountPercent)
            const passed = actual === expected

            return (
              <li key={name} className={passed ? 'text-green-700' : 'text-red-700'}>
                {passed ? 'PASS' : `FAIL (received ${actual})`}: {name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

// Function to test - highlight this and use /tests
function calculateDiscount(price: number, discountPercent: number): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return price
  }
  const discountAmount = (price * discountPercent) / 100
  return price - discountAmount
}

const calculateDiscountTests = [
  { name: 'applies a percentage discount', price: 200, discountPercent: 25, expected: 150 },
  { name: 'handles a zero discount', price: 80, discountPercent: 0, expected: 80 },
  { name: 'handles a 100% discount', price: 80, discountPercent: 100, expected: 0 },
  { name: 'rejects a negative price', price: -50, discountPercent: 10, expected: -50 },
  { name: 'rejects a negative discount', price: 80, discountPercent: -10, expected: 80 },
  { name: 'rejects a discount over 100%', price: 80, discountPercent: 110, expected: 80 },
]

/* ==========================================
 * 💬 USER DASHBOARD COMPONENT
 * Ask Copilot questions about this code!
 * ========================================== */
function UserDashboard() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      lastLogin: '2024-01-10',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'active',
      lastLogin: '2024-01-16',
    },
  ])

  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = users.filter(user => {
    const matchesFilter = filter === 'all' || user.status === filter
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight this component and ask Copilot about performance, security, or refactoring
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">All Users</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="space-y-2">
        {filteredUsers.map(user => (
          <div key={user.id} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Last login: {user.lastLogin}</p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 py-8">No users found</p>
      )}
    </div>
  )
}
