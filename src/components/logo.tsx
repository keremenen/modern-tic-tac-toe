import logo from '.././assets/logo.svg'
import { cn } from '../lib/utils'

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return <img src={logo} className={cn(className)} />
}
