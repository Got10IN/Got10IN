import { ICard } from '../../pages/home/Card.component'
import mentor1pic from '../../assets/mentor/mentor1.png'
import mentor2pic from '../../assets/mentor/mentor2.png'
import mentor3pic from '../../assets/mentor/mentor3.png'
import mentor4pic from '../../assets/mentor/mentor4.png'
import mentor5pic from '../../assets/mentor/mentor5.png'
import mentor6pic from '../../assets/mentor/mentor6.png'
import mentor7pic from '../../assets/mentor/mentor7.png'
import mentor8pic from '../../assets/mentor/mentor8.png'
import { Link } from 'react-router-dom'
import { WishlistButton } from '../../components/functional/WishlistButton'
import {IMentorCard} from '../../pages/findMentor/MentorCard.component'

export const MENTOR_CARDS: IMentorCard[] = [
    {
        id:"1",
        daysJoined: 120,
        name: "Johnny Ivy",
        alumni:"UC Berkeley Alumni",
        rating:4.3,
        ratingQuantity:211,
        yearsOfExperience:4,
        topic1:"Design Mentor",
        topic2:"Product Design",
        aiChattingPrice:50,
        totalSubscriber:100,
        oneOnonePrice:80,
        totalHour:300,
        mentorPic: mentor1pic,
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),    
    },
    {
        id:"2",
        daysJoined: 120,
        name: "James David",
        alumni:"UC Berkeley Alumni",
        rating:4.3,
        ratingQuantity:211,
        yearsOfExperience:4,
        topic1:"Design Mentor",
        topic2:"Product Design",
        aiChattingPrice:50,
        totalSubscriber:100,
        oneOnonePrice:80,
        totalHour:360,
        mentorPic: mentor5pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"3",
        daysJoined: 120,
        name: "Lily Brown",
        alumni:"Senior @Standford University",
        rating:4.3,
        ratingQuantity:12,
        yearsOfExperience:4,
        topic1:"Design Impact",
        topic2:"",
        aiChattingPrice:0,
        totalSubscriber:30,
        oneOnonePrice:20,
        totalHour:20,
        mentorPic: mentor2pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"4",
        daysJoined: 120,
        name: "Nick Murphy",
        alumni:"UC Berkeley Alumni",
        rating:4.3,
        ratingQuantity:211,
        yearsOfExperience:4,
        topic1:"Design Mentor",
        topic2:"Product Design",
        aiChattingPrice:50,
        totalSubscriber:100,
        oneOnonePrice:80,
        totalHour:360,
        mentorPic: mentor6pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"5",
        daysJoined: 120,
        name: "Dan Cohen",
        alumni:"Senior @Standford University",
        rating:4.3,
        ratingQuantity:12,
        yearsOfExperience:4,
        topic1:"Design Impact",
        topic2:"",
        aiChattingPrice:0,
        totalSubscriber:30,
        oneOnonePrice:20,
        totalHour:20,
        mentorPic: mentor3pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"6",
        daysJoined: 120,
        name: "Ana Stuart",
        alumni:"UC Berkeley Alumni",
        rating:4.3,
        ratingQuantity:211,
        yearsOfExperience:4,
        topic1:"Design Mentor",
        topic2:"Product Design",
        aiChattingPrice:50,
        totalSubscriber:100,
        oneOnonePrice:80,
        totalHour:360,
        mentorPic: mentor7pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"7",
        daysJoined: 120,
        name: "David Lincoln",
        alumni:"UC Berkeley Alumni",
        rating:4.3,
        ratingQuantity:211,
        yearsOfExperience:4,
        topic1:"Design Mentor",
        topic2:"Product Design",
        aiChattingPrice:50,
        totalSubscriber:100,
        oneOnonePrice:80,
        totalHour:360,
        mentorPic: mentor4pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
    {
        id:"8",
        daysJoined: 120,
        name: "Lena Jane",
        alumni:"Senior @Standford University",
        rating:4.3,
        ratingQuantity:12,
        yearsOfExperience:4,
        topic1:"Design Impact",
        topic2:"",
        aiChattingPrice:0,
        totalSubscriber:30,
        oneOnonePrice:20,
        totalHour:20,
        mentorPic: mentor8pic,
        
        
        button: ()=>(
            <Link
                to='/mentor-detail'
                className=' rounded-full px-4 py-2 border text-sm text-black text-center cursor-pinter no-underline mb-4 inline-block'
            >
                Details
            </Link>
        ),  
    },
]

