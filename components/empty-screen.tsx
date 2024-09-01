import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          PlantDoc Chatbot
        </h1>
        <p className="leading-normal text-zinc-900">
          This is an AI chatbot app {' '}
          <ExternalLink href="https://nextjs.org">PlantDoc</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
           Plantdoc
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://ai.google.dev">
            Plantdoc AI
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
             Gemini
          </ExternalLink>{' '}

        </p>
      </div>
    </div>
  )
}
