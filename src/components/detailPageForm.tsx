'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  mobile: z
    .string()
    .length(10, 'Enter a valid 10-digit mobile number') // Checks for exactly 10 digits
    .refine((value) => !value.startsWith('0'), {
      message: 'Mobile number cannot start with 0',
    }),
  email: z.string().email('Enter a valid email'),
  travellers: z
    .string()
    .refine((val) => /^\d+$/.test(val), {
      message: 'Must be a valid number',
    })
    .refine((val) => Number(val) > 0, {
      message: 'Must be greater than 0',
    }),
})

export default function DetailPageForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      travellers: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-skin rounded-xl p-6 shrink-0 self-start"
      >
        <div>
          <h3 className="text-darkBlue text-2xl font-bold mb-2">Personalize Your Adventure</h3>
          <p className="text-black text-lg">Plan a trip that’s uniquely yours.</p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" {...field} placeholder="Enter your Phone no" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} placeholder="Enter your Email id" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="travellers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Travellers</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="Enter total no. of traveller" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <p className="text-sm text-black">Starting from</p>
          <p className="text-sm text-black">
            <span className="text-base font-semibold">₹1,50,000</span> per person
          </p>
        </div>

        <Button type="submit" className="w-full">
          Get Expert Assistance
        </Button>
      </form>
    </Form>
  )
}
