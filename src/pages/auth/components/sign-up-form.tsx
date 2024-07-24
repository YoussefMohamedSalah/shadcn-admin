import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'

interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> { }

const formSchema = z
  .object({
    first_name: z
      .string()
      .min(1, { message: 'يرجى إدخال الاسم الأول' }),
    last_name: z
      .string()
      .min(1, { message: 'يرجى إدخال اسم العائلة' }),
    user_name: z
      .string()
      .min(1, { message: 'يرجى إدخال اسم المستخدم' }),
    email: z
      .string()
      .min(1, { message: 'يرجى إدخال البريد الإلكتروني' })
      .email({ message: 'عنوان البريد الإلكتروني غير صالح' }),
    address: z
      .string()
      .min(1, { message: 'يرجى إدخال العنوان' }),
    phone_number: z
      .string()
      .min(1, { message: 'يرجى إدخال رقم الهاتف' }),
    id_number: z
      .string()
      .min(1, { message: 'يرجى إدخال رقم الهوية' }),
    register_code: z
      .string()
      .min(1, { message: 'يرجى إدخال رمز التسجيل' }),
    password: z
      .string()
      .min(1, {
        message: 'يرجى إدخال كلمة المرور',
      })
      .min(7, {
        message: 'يجب أن تكون كلمة المرور مكونة من 7 أحرف على الأقل',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'كلمات المرور غير متطابقة',
    path: ['confirmPassword'],
  });

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      address: '',
      phone_number: '',
      id_number: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>الاسم الأول</FormLabel>
                  <FormControl>
                    <Input placeholder='الاسم الأول' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>اسم العائلة</FormLabel>
                  <FormControl>
                    <Input placeholder='اسم العائلة' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='user_name'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>اسم المستخدم</FormLabel>
                  <FormControl>
                    <Input placeholder='اسم المستخدم' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder='name@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>العنوان</FormLabel>
                  <FormControl>
                    <Input placeholder='العنوان' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone_number'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>رقم الهاتف</FormLabel>
                  <FormControl>
                    <Input placeholder='+201234567890' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='id_number'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>رقم الهوية</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='mt-2' loading={isLoading}>
              إنشاء حساب
            </Button>

            {/* <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandGithub className='h-4 w-4' />}
              >
                GitHub
              </Button>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandFacebook className='h-4 w-4' />}
              >
                Facebook
              </Button>
            </div> */}
          </div>
        </form>
      </Form>
    </div>
  )
}
