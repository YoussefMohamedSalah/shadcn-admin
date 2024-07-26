import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IconClock, IconCheck } from '@tabler/icons-react'

export function RecentInvites() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <IconClock />
        <div className='mr-auto ml-1 font-medium'>Pending verification...</div>
        <div className='mr-4 space-y-1'>
          <p className='text-sm font-medium leading-none text-end'>احمد علي </p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex items-center'>
        <IconClock />
        <div className='mr-auto ml-1 font-medium'>Pending verification...</div>
        <div className='mr-4 space-y-1'>
          <p className='text-sm font-medium leading-none text-end'>يوسف صلاح</p>
          <p className='text-sm text-muted-foreground'>mail@email.com</p>
        </div>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>YS</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex items-center'>
        <IconCheck />
        <div className='mr-auto ml-1 font-medium'>Verified</div>
        <div className='mr-4 space-y-1'>
          <p className='text-sm font-medium leading-none text-end'>محمد  كريم </p>
          <p className='text-sm text-muted-foreground'>
            mail@email.com
          </p>
        </div>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex items-center'>
        <IconCheck />
        <div className='mr-auto ml-1 font-medium'>Verified</div>
        <div className='mr-4 space-y-1'>
          <p className='text-sm font-medium leading-none text-end'>اسلام محمد</p>
          <p className='text-sm text-muted-foreground'>mail@email.com</p>
        </div>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex items-center'>
        <IconCheck />
        <div className='mr-auto ml-1 font-medium'>Verified</div>
        <div className='mr-4 space-y-1'>
          <p className='text-sm font-medium leading-none text-end'>سلمي ابراهيم</p>
          <p className='text-sm text-muted-foreground'>mail@email.com</p>
        </div>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>SI</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
