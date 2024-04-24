import { XIcon } from 'lucide-react'
import { Dispatch, forwardRef, SetStateAction, useState } from 'react'

import { Badge } from './Badge'
import { Button } from './Button'
import { Input, InputProps } from './Input'

type InputTagsProps = InputProps & {
  value: string[]
  onChange: Dispatch<SetStateAction<string[]>>
}

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState('')

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...value, pendingDataPoint])
        onChange(Array.from(newDataPoints))
        setPendingDataPoint('')
      }
    }

    return (
      <>
        <div className="relative flex">
          <Input
            value={pendingDataPoint}
            onChange={(e) => setPendingDataPoint(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault()
                addPendingDataPoint()
              }
            }}
            className="h-[2.6rem] border-primary"
            {...props}
            ref={ref}
          />
          <Button
            type="button"
            variant="secondary"
            className="absolute right-[0.03rem] top-1/2 -translate-y-1/2 rounded-l-none border
              border-l-0"
            onClick={addPendingDataPoint}
          >
            Add
          </Button>
        </div>
        <div
          className="flex min-h-20 flex-wrap items-center gap-2 overflow-y-auto rounded-md border
            border-dashed p-2"
        >
          {value?.map((item, idx) => (
            <Badge key={idx}>
              {item}
              <button
                type="button"
                className="ml-2 w-3"
                onClick={() => {
                  onChange(value.filter((i) => i !== item))
                }}
              >
                <XIcon className="w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </>
    )
  }
)

InputTags.displayName = 'InputTags'
