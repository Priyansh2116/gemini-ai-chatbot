import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Sunrisers Chatbot to solve any doubts
        </h1>
        <p className="leading-normal text-zinc-900">
          This is an open source AI chatbot app template buit by Priyansh{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Edutech.co
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://ai.google.dev">
            Solve your doubts
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
        </p>
      </div>
    </div>
  )
}
