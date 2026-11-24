'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

type NewsletterSignupProps = {
  formId?: string
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export function NewsletterSignup({ formId }: NewsletterSignupProps) {
  const action = formId ? `https://formbold.com/s/${encodeURIComponent(formId)}` : undefined
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [feedback, setFeedback] = useState('')
  const isSubmitting = status === 'submitting'
  const isComplete = status === 'success'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!action || isSubmitting || isComplete) return

    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(action, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const result: unknown = await response.json().catch(() => null)
      const responseMessage =
        result && typeof result === 'object' && 'message' in result && typeof result.message === 'string'
          ? result.message
          : undefined

      if (!response.ok) {
        throw new Error(responseMessage || 'We could not submit your address. Please try again.')
      }

      form.reset()
      setStatus('success')
      setFeedback('You are on the list. Thank you for joining us.')
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error && error.message !== 'Failed to fetch'
          ? error.message
          : 'We could not submit your address. Please check your connection and try again.',
      )
    }
  }

  return (
    <section
      className="grid grid-cols-1 items-end gap-8 border-t border-border bg-card/85 px-6 py-12 sm:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] md:gap-[clamp(38px,9vw,140px)] md:px-[13.2vw] md:py-[clamp(60px,8vw,112px)]"
      aria-labelledby="newsletter-title"
    >
      <div className="min-w-0">
        <p className="m-0 font-sans text-[clamp(0.6875rem,1.1vw,0.8125rem)] leading-none tracking-[0.24em] text-foreground">
          THE HOUSE OF ORK
        </p>
        <h2
          id="newsletter-title"
          className="mt-6 mb-4 font-(family-name:--font-editorial) text-[clamp(1.75rem,4.5vw,3.125rem)] leading-none font-normal tracking-[-0.035em] text-foreground"
        >
          Be first to know.
        </h2>
        <p className="m-0 max-w-[340px] text-[clamp(0.8125rem,1.2vw,0.9rem)] leading-[1.8] text-muted-foreground [overflow-wrap:anywhere]">
          Updates on events, collections, and exclusive news.
        </p>
      </div>
      <div className="w-full min-w-0 md:max-w-[460px] md:justify-self-end">
        <form
          action={action}
          method="POST"
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
        >
          <label
            className="mb-3 block font-sans text-[clamp(0.625rem,0.8vw,0.75rem)] tracking-[0.16em] text-muted-foreground"
            htmlFor="newsletter-email"
          >
            YOUR EMAIL ADDRESS
          </label>
          <div className="flex items-center border-b border-muted-foreground">
            <input
              className="h-[50px] min-w-0 flex-1 border-0 bg-transparent text-[clamp(1rem,1.3vw,1.125rem)] text-foreground outline-none placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              disabled={!action || isComplete}
            />
            <button
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 border-0 bg-transparent pr-0 pl-4 font-sans text-[clamp(0.625rem,0.8vw,0.75rem)] tracking-[0.12em] text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              aria-label={
                isSubmitting
                  ? 'Submitting newsletter subscription'
                  : isComplete
                    ? 'Newsletter subscription complete'
                    : 'Subscribe to the Serein newsletter'
              }
              disabled={!action || isSubmitting || isComplete}
            >
              <span>{isSubmitting ? 'SENDING' : isComplete ? 'SUBSCRIBED' : 'SUBSCRIBE'}</span>
              <ArrowUpRight size={16} aria-hidden="true" className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#bf2a4c] hover:text-[#9f0034]" />
            </button>
          </div>
          <input
            className="absolute -left-[10000px] size-px opacity-0"
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </form>
        {status !== 'idle' && (
          <p
            className={`mt-3 text-[clamp(0.75rem,1vw,0.875rem)] leading-relaxed ${status === 'error' ? 'text-accent' : 'text-foreground'}`}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live={status === 'error' ? 'assertive' : 'polite'}
            aria-atomic="true"
          >
            {feedback}
          </p>
        )}
        <p className="mt-3 [overflow-wrap:anywhere] text-[clamp(0.625rem,0.8vw,0.75rem)] leading-relaxed text-muted-foreground">
          {action
            ? 'Occasional notes only. Unsubscribe whenever you wish.'
            : 'Newsletter subscriptions are temporarily unavailable.'}
        </p>
      </div>
    </section>
  )
}
