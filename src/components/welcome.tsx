interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export function WelcomeMsg({ name }: TopNavProps) {
  return (
    <>
      <div className=''>
        <h1 className='text-2xl font-550 tracking-tight'>Hello {name}</h1>
      </div>
    </>
  )
}
