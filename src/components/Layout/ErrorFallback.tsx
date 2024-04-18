import { Button } from '@/components'
import { ERRORS } from '@/config'

type ErrorFallbackProps = {
  error?: Error
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div
      className="flex h-lvh w-lvw flex-col items-center justify-center gap-6"
      role="alert"
    >
      <h1 className="font-bold text-foreground">{ERRORS.FALLBACK_TEXT}</h1>
      <p className="w-full max-w-xl text-center font-mono text-foreground">
        {error?.message}
      </p>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        {ERRORS.FALLBACK_BUTTON_LABEL}
      </Button>
    </div>
  )
}
