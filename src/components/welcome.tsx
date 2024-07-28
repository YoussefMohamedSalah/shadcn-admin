interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export function WelcomeMsg({ name }: TopNavProps) {
  return (
    <>
      <div>
        <p className='text-2xl text-muted-foreground'>
          {name}
        </p>
        <span> Welcome back! {" "}</span>
      </div>
    </>
  )
}
