import clsx from 'clsx'
import React, { forwardRef, memo, ReactNode } from 'react'

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  mode?: 'default' | 'primary' | 'danger' | 'warning'
  outline?: boolean
  type?: 'submit' | 'reset' | 'button'
  className?: string
  icon?: ReactNode
  children?: ReactNode
}

const Button: React.FC<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ mode = 'default', className, icon, children, type = 'button', ...props }, ref) => {
    const classNames = clsx(
      'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow h-',
      { '': 'primary', [className as string]: !!className }
    )

    return (
      <button ref={ref} {...props} className={classNames}>
        {icon && icon}
        {children || 'Default'}
      </button>
    )
  }
)
Button.displayName = 'button'

export default memo(Button)
