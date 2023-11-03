import { MentorTypeDropDown } from "./MentorTypeDropDown.component"
import { ServiceTypeDropDown } from "./ServiceTypeDropDown.component"
import { SortByDropDown } from "./SortByDropDown.component"

export const OverallDropDown = () => {
    return(
        <div className='flex flex-row-3 justify-between mb-8 items-start place-items-center w-full'>

                <MentorTypeDropDown/>
                <ServiceTypeDropDown/>
                <SortByDropDown/>
            </div>
    )
}