export class Project{
    constructor(public _id: number,
        public projName: string,
        public client: string,
        public activity: string,
        public startDate: Date,
        public endDate: Date,
        public details?: string,
        public photo ?: String ,)
        {}
}


// ref : https://www.groupe-legendre.com/en/our-projects/horizon-designing-and-building-of-3-buildings/