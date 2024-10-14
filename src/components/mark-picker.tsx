import { useState } from 'react'
import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'
import { cn } from '../lib/utils'

export default function MarkPicker() {
  const [selectedMark, setSelectedMark] = useState('O')

  const MarkPickerIcons = [
    {
      icon: IconX,
      value: 'X',
      props: { className: 'size-8 fill-gray' },
    },
    {
      icon: IconO,
      value: 'O',
      props: { className: 'size-8  fill-gray' },
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl bg-navy-secondary px-6 py-6 shadow-[0_8px_#10212A]">
      <h1 className="mb-[24px] text-base font-bold">PICK PLAYER 1’S MARK</h1>

      <div className="mb-[17px] flex h-18 w-full rounded-xl bg-navy px-2 py-2">
        {MarkPickerIcons.map(({ icon: Icon, value, props }) => (
          <button
            key={value}
            value={value}
            className={cn(
              'flex h-full flex-grow items-center justify-center rounded-xl',
              {
                'bg-inherit': value !== selectedMark,
                'fill-red bg-gray': value === selectedMark,
              },
            )}
            onClick={() => setSelectedMark(value)}
          >
            <Icon
              {...props}
              className={cn(props.className, {
                'fill-navy': selectedMark === value,
              })}
            />
          </button>
        ))}
      </div>

      <p className="text-sm font-medium">REMEMBER : X GOES FIRST</p>
    </div>
  )
}
