import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Plant Disease Detection
        </h1>
        <p className="leading-normal text-zinc-900">
         {' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
        
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://ai.google.dev">
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
         {' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
          </ExternalLink>{' '}
        </p>
      </div>
    </div>
  )
}
