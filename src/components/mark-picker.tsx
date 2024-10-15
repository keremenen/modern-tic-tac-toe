import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'
import { MarkPickerIcon } from '../lib/types'
import { useGameStore } from '../stores/gameStore'
import { cn } from '../lib/utils'

export default function MarkPicker() {
  const firstPlayerMark = useGameStore((state) => state.firstPlayerMark)
  const pickFirstPlayerMark = useGameStore((state) => state.pickFirstPlayerMark)

  const MarkPickerIcons: MarkPickerIcon[] = [
    {
      icon: IconX,
      value: 'X',
      props: { className: 'size-8 fill-gray-base' },
    },
    {
      icon: IconO,
      value: 'O',
      props: { className: 'size-8  fill-gray-base' },
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl bg-navy-secondary p-6 shadow-2xl">
      <h1 className="mb-6 text-base font-bold">PICK PLAYER 1’S MARK</h1>

      <div className="mb-4 flex w-full rounded-xl bg-navy p-2">
        {MarkPickerIcons.map(({ icon: Icon, value, props }) => (
          <button
            key={value}
            value={value}
            className={cn('grid w-full justify-center rounded-xl py-3', {
              'fill-red bg-gray-base': value === firstPlayerMark,
            })}
            onClick={() => {
              pickFirstPlayerMark(value)
            }}
          >
            <Icon
              {...props}
              className={cn(props.className, {
                'fill-navy': firstPlayerMark === value,
              })}
            />
          </button>
        ))}
      </div>

      <p className="text-sm font-medium">REMEMBER : X GOES FIRST</p>
    </div>
  )
}
