import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentInvites() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Ahmed ali</p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <div className='ml-auto ml-1 font-medium'>Pending verification</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Ahmed ali</p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <div className='ml-auto ml-1 font-medium'>Pending verification</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Ahmed ali</p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <div className='ml-auto ml-1 font-medium'>Verified</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Ahmed ali</p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <div className='ml-auto ml-1 font-medium'>Verified</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Ahmed ali</p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <div className='ml-auto ml-1 font-medium'>Verified</div>
      </div>
    </div>
  )
}
