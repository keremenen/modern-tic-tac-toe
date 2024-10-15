type ModalProps = {
  children?: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black/50">
      <ModalBody>{children}</ModalBody>
    </div>
  )
}

export function ModalBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center bg-navy-secondary pb-12 pt-10 text-center">
      {children}
    </div>
  )
}

export function ModalTitle({ children }: { children?: React.ReactNode }) {
  return <p className="mb-4 text-sm uppercase">{children}</p>
}

export function ModalDescription({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold uppercase">
      {children}
    </h3>
  )
}

export function ModalControls({ children }: { children?: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>
}
