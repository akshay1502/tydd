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
import { Textarea } from './ui/textarea'

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
  destination: z
    .string()
    .min(2, 'Destination must be at least 2 characters')
    .max(120, 'Destination must not exceed 120 characters'),
  ideas: z.string().optional(),
})

export default function ContactUsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      destination: '',
      ideas: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-darkBlue text-4xl font-semibold mb-2">Do you have any questions?</h3>
          <p className="text-darkBlue text-2xl">Please fill out the form below.</p>
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
              <FormLabel>Mobile No</FormLabel>
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
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your travel destination" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ideas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share Your Ideas</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Tell Us How We Can Help" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="travellers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Travellers</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        // travellers: z.preprocess(
  //   (val) => (typeof val === 'string' ? parseInt(val, 10) : val),
  //   z.number().min(1, 'At least 1 traveller is required'),
  // ),*/}

        <Button type="submit" className="w-full">
          Contact Us
        </Button>
      </form>
    </Form>
  )
}
