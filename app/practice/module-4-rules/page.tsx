'use client'

import { useState, type FormEvent } from 'react'

/**
 * MODULE 4: Project Rules (Teaching Copilot Your Style)
 *
 * This page helps you define, test, and refine your Copilot rules.
 * Copilot reads `.github/copilot-instructions.md` and follows your preferred coding patterns automatically.
 *
 * This module is RULES-FOCUSED and uses AGENT MODE tasks (bigger, goal-driven prompts).
 * No “suggestions” training here — you’ll direct Copilot to scaffold real components/features that must follow your rules.
 */

interface LoginFormErrors {
  email?: string
  password?: string
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginFormErrors>({})
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: LoginFormErrors = {}
    if (!email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = 'Enter a valid email address.'
    if (!password) nextErrors.password = 'Password is required.'
    else if (password.length < 8) nextErrors.password = 'Password must be at least 8 characters.'

    setErrors(nextErrors)
    setIsValid(Object.keys(nextErrors).length === 0)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-lg border bg-white p-4">
      <div>
        <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
            setIsValid(false)
          }}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'login-email-error' : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {errors.email && (
          <p id="login-email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
            setIsValid(false)
          }}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? 'login-password-error' : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {errors.password && (
          <p id="login-password-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.password}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Sign in
      </button>
      {isValid && (
        <p role="status" className="text-sm text-green-700">
          Your details are valid.
        </p>
      )}
    </form>
  )
}

interface NotificationBadgeProps {
  count: number
  maxCount?: number
}

const NotificationBadge = ({ count, maxCount = 99 }: NotificationBadgeProps) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count

  return (
    <span
      aria-label={`${count} notifications`}
      className="inline-flex min-w-6 items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white"
    >
      {displayCount}
    </span>
  )
}

interface ProgressBarProps {
  value: number
  label?: string
}

const ProgressBar = ({ value, label = 'Progress' }: ProgressBarProps) => {
  const progress = Math.max(0, Math.min(100, value))

  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-sm text-gray-700">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <progress
        aria-label={label}
        className="h-2 w-full accent-green-600"
        max={100}
        value={progress}
      />
    </div>
  )
}

interface ModalDialogProps {
  open: boolean
  onClose: () => void
  title: string
}

const ModalDialog = ({ open, onClose, title }: ModalDialogProps) => {
  if (!open) return null

  // Production dialogs should trap focus inside the modal and restore it when closed.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-dialog-title"
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-dialog-title" className="text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="rounded px-2 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ×
          </button>
        </div>
        <p className="mt-4 text-gray-700">This is an example modal dialog.</p>
      </div>
    </div>
  )
}

interface DataTableColumn {
  key: string
  header: string
}

interface DataTableProps {
  columns: DataTableColumn[]
  rows: Record<string, string | number>[]
}

const DataTable = ({ columns, rows }: DataTableProps) => (
  <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          {columns.map(column => (
            <th key={column.key} scope="col" className="px-4 py-3 font-semibold text-gray-700">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {columns.map(column => (
              <td key={column.key} className="whitespace-nowrap px-4 py-3 text-gray-700">
                {row[column.key] ?? '—'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function Module4Practice() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const tableColumns = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'status', header: 'Status' },
  ]
  const tableRows = [
    { name: 'Alex Morgan', role: 'Designer', status: 'Active' },
    { name: 'Sam Lee', role: 'Developer', status: 'Away' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Project Rules</h1>
          <p className="text-gray-600">
            Teach Copilot to follow your coding voice and style (Agent Mode)
          </p>
        </header>

        {/* LESSON 4.1 — Create Rules File */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.1 — Setting Up Your Rules File</h2>
          <p className="text-gray-700 mb-4">
            Your project rules live in <code>.github/copilot-instructions.md</code>. Once created,
            Copilot automatically uses these instructions whenever you write or edit code in this
            repo.
          </p>

          <div className="bg-gray-50 p-4 rounded border text-sm text-gray-800 mb-4">
            <p className="font-semibold mb-2">Recommended rules:</p>
            <pre className="bg-white p-4 rounded border text-sm text-gray-800 overflow-x-auto">
              {`# Copilot Instructions

- Use React functional components with arrow functions.
- Write TypeScript types or interfaces for component props and state.
- Style with Tailwind CSS; avoid inline styles.
- Keep components small, clean, and modular; extract helpers if a function grows large.
- Add concise comments for non-obvious logic.
- Prefer accessibility-first HTML (semantic elements; label interactive controls).
`}
            </pre>
          </div>

          <p className="text-gray-700">
            Save your rules file, then move on to the next section to validate that Copilot follows
            them in Agent Mode.
          </p>
        </section>

        {/* LESSON 4.2 — Test Rules with Agent Mode */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.2 — Testing Your Rules (Agent Mode)
          </h2>
          <p className="text-gray-700 mb-4">
            Use the practice area below to **direct Copilot (Agent Mode)** to scaffold real
            features. Each task should naturally follow your rules: arrow functions, TypeScript
            types, Tailwind classes, and minimal, purposeful comments.
          </p>

          <div className="border-2 border-blue-400 rounded p-4 bg-blue-50">
            <h3 className="font-semibold mb-2 text-gray-800">Practice Area — Agent Tasks</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add a comment below and run the task with Copilot (Agent Mode):
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>
                  // Scaffold a LoginForm with email, password, and submit button. Client-side
                  validation, Tailwind styling, accessible labels.
                </code>
              </li>
              <li>
                <code>
                  // Build a ProfileCard with avatar image, name, bio, and a “Contact” button. Keep
                  layout responsive and concise.
                </code>
              </li>
              <li>
                <code>
                  // Create a PrimaryButton component (props: children, onClick, type?). Apply our
                  standard Tailwind button style.
                </code>
              </li>
              <li>
                <code>
                  // Implement a simple SearchBar with input, clear button, and debounced onChange
                  callback (300ms).
                </code>
              </li>
            </ul>

            <p className="text-sm text-gray-600 mb-2">Expected (based on your rules):</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Arrow-function components</li>
              <li>TypeScript props/interfaces</li>
              <li>Tailwind classes (no inline styles)</li>
              <li>Small, focused structure + brief comments for non-obvious logic</li>
              <li>Accessible markup for inputs and controls</li>
            </ul>

            <LoginForm />
          </div>
        </section>

        {/* LESSON 4.3 — Consistency Across Multiple Components */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-green-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.3 — Consistency Across Components
          </h2>
          <p className="text-gray-700 mb-4">
            Generate multiple components and verify that Copilot keeps your rules consistent across
            different feature shapes.
          </p>

          <div className="border-2 border-green-400 rounded p-4 bg-green-50">
            <p className="text-sm text-gray-700 mb-4">Agent tasks to try one-by-one:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>NotificationBadge</code> displays a count, capped at <code>maxCount</code>{' '}
                (defaults to 99).
              </li>
              <li>
                <code>
                  // Create a ProgressBar (props: value 0–100, label?). Include accessible markup
                  for screen readers.
                </code>
              </li>
              <li>
                <code>
                  // Create a ModalDialog (props: open, onClose, title). Include a close button and
                  focus trap note in comments.
                </code>
              </li>
              <li>
                <code>
                  // Create a DataTable shell (columns prop, rows prop). Responsive table layout
                  with Tailwind utilities.
                </code>
              </li>
            </ul>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>Example with 120 notifications:</span>
              <NotificationBadge count={120} />
            </div>

            <div className="my-4 max-w-md">
              <ProgressBar value={72} label="Upload progress" />
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Open modal
            </button>
            <ModalDialog
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example modal"
            />

            <div className="my-4">
              <DataTable columns={tableColumns} rows={tableRows} />
            </div>

            <p className="text-sm text-gray-700">
              After each generation, check for rule adherence (arrow functions, typed props,
              Tailwind rhythm, minimal comments). If anything drifts, adjust{' '}
              <code>.github/copilot-instructions.md</code> and retry the task.
            </p>
          </div>
        </section>

        {/* LESSON 4.4 — Refining and Expanding Rules */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.4 — Refining and Expanding Rules</h2>
          <p className="text-gray-700 mb-4">
            As your project grows, evolve your rules with specific, reusable patterns so Agent Mode
            drafts match your voice without reminders.
          </p>

          <p className="text-gray-700 mb-4">Examples you can add to your rules file:</p>
          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto mb-4">
            {`- Primary button style: 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60'.
- Form inputs: use label + id + aria-describedby; include error text with role="alert".
- Components over ~25 lines: extract helpers; keep render paths simple and readable.
- Prefer composition over prop drilling; create small utilities/hooks for repeated logic.
`}
          </pre>

          <p className="text-gray-700">
            Keep the file updated as your standards change. Copilot will follow the latest version
            across all Agent Mode tasks.
          </p>
        </section>

        {/* SUMMARY */}
        <section className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Define once, follow everywhere.</strong> Copilot reads your rules
              automatically.
            </li>
            <li>
              <strong>Direct with Agent Mode.</strong> Use bigger tasks to see your rules applied in
              realistic code.
            </li>
            <li>
              <strong>Refine as you go.</strong> When you see drift, clarify the rule and retry.
            </li>
            <li>
              <strong>Keep it modular.</strong> Small components + typed props + Tailwind rhythm =
              consistent output.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
