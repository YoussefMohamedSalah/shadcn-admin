import { Layout } from '@/components/custom/layout'
import { Separator } from '@/components/ui/separator'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import ProfileForm from './profile-form'
import ContentSection from './content-section'
import { AccountForm } from './account-form'

export default function Profile() {
  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        {/* <Search /> */}
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body className='flex flex-col'>
        <div className='flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0'>
          <div className='flex w-full p-1 pr-4 md:overflow-y-hidden'>
            <ContentSection
              title='My Profile'
              desc='Manage your account settings and set e-mail preferences.'
            >
              <>
                <ProfileForm />
                <Separator className='my-4 lg:my-6' />
                <AccountForm />
              </>
            </ContentSection>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}