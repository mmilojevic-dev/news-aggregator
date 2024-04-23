import { Spinner } from '@/components'
import { cn } from '@/utils'

interface LoadingFallbackProps {
  fullscreen?: boolean
  className?: string
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  fullscreen = false,
  className
}) => {
  return (
    <div
      className={cn(
        'relative',
        fullscreen ? 'h-lvh w-lvw' : 'size-full',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <Spinner size="xl" />
      </div>
    </div>
  )
}
