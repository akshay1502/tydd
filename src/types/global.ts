export type PopularPackages = {
  id: number
  category: string
  cost: number
  destination: string
  package: string
  overview?: string | null
  highlights?: {
    chips?:
      | {
          chip?: string
          id?: string | null
        }[]
      | null
    pointers?:
      | {
          pointer?: string | null
          id?: string | null
        }[]
      | null
  }
  day_breakup?: {
    days?:
      | {
          title?: string | null
          break_up?:
            | {
                title?: string | null
                subtitle?: string | null
                id?: string | null
              }[]
            | null
          id?: string | null
        }[]
      | null
  }
  accomodations?: {
    location?:
      | {
          name?: string | null
          type?: string | null
          whats_included?: string | null
          link?: string | null
          id?: string | null
        }[]
      | null
  }
}

export type ContactUsFormTypes = {
  name: string
  mobile: string
  email: string
  destination: string
  ideas?: string | undefined
}

export type DetailPageFormTypes = {
  name: string
  mobile: string
  email: string
  travellers: string
}
