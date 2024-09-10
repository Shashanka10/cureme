import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import LogoCure from "./logocure.png"


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    LogoCure
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Richard James specializes in family medicine, focusing on personalized care, preventive treatments, and health education to maintain long-term wellness. His passion is patient-centered care.',
        fees: 50,
        address: {
            line1: '12th Avenue, Oxford Street',
            line2: 'Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Emily Larson provides comprehensive care for women’s health, including maternity care and reproductive health. She is dedicated to creating a compassionate environment for her patients.',
        fees: 60,
        address: {
            line1: '45th Street, Riverbank Road',
            line2: 'Greenwich, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '3 Years',
        about: 'Dr. Sarah Patel is a specialist in treating skin, hair, and nail disorders. She focuses on providing patients with tailored skincare routines and treatments for common and complex dermatological conditions.',
        fees: 40,
        address: {
            line1: '37th Boulevard, East End',
            line2: 'Piccadilly Circus, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Christopher Lee focuses on child health, specializing in both acute and preventive care for newborns, children, and adolescents. He works closely with parents to ensure optimal child development.',
        fees: 45,
        address: {
            line1: '25th Street, Baker’s Hill',
            line2: 'Notting Hill, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '7 Years',
        about: 'Dr. Jennifer Garcia treats disorders of the nervous system, including the brain, spinal cord, and nerves. Her area of expertise includes migraines, epilepsy, and neurodegenerative diseases.',
        fees: 70,
        address: {
            line1: '57th Lane, King’s Cross',
            line2: 'Victoria, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '9 Years',
        about: 'Dr. Andrew Williams specializes in the surgical treatment of musculoskeletal disorders, including fractures, joint replacement, and sports injuries. His focus is on restoring patient mobility and function.',
        fees: 75,
        address: {
            line1: '16th Street, Harley Road',
            line2: 'Soho, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Cardiologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Christopher Davis is a specialist in cardiovascular health, focusing on early diagnosis and treatment of heart conditions. His expertise includes interventional cardiology and preventive care.',
        fees: 80,
        address: {
            line1: '18th Avenue, Central Park',
            line2: 'Camden, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Timothy White offers a wide range of services for women’s health, including fertility treatments, pregnancy care, and menstrual disorders. He is committed to providing empathetic and thorough care.',
        fees: 65,
        address: {
            line1: '28th Street, Queen’s Square',
            line2: 'Richmond, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '4 Years',
        about: 'Dr. Ava Mitchell is a certified dermatologist specializing in treating conditions such as acne, eczema, and psoriasis. She also offers advanced cosmetic dermatology procedures.',
        fees: 50,
        address: {
            line1: '47th Lane, Riverfront',
            line2: 'Chelsea, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Jeffrey King provides specialized pediatric care, focusing on developmental health and preventive treatments for infants and children. He is known for his friendly approach to child care.',
        fees: 55,
        address: {
            line1: '67th Boulevard, Garden Road',
            line2: 'Wimbledon, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '9 Years',
        about: 'Dr. Zoe Kelly specializes in the diagnosis and treatment of neurological disorders. She has expertise in handling complex neurological cases, including stroke and multiple sclerosis.',
        fees: 85,
        address: {
            line1: '57th Avenue, Willow Lane',
            line2: 'Hammersmith, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '6 Years',
        about: 'Dr. Patrick Harris focuses on minimally invasive orthopedic surgeries for joint and bone disorders. He has a particular interest in sports injuries and arthroscopic procedures.',
        fees: 90,
        address: {
            line1: '77th Street, Elm Park',
            line2: 'Hampstead, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Chloe Evans provides holistic care, focusing on the diagnosis and management of chronic illnesses. She has a patient-first approach to ensure comprehensive medical care.',
        fees: 55,
        address: {
            line1: '15th Street, Maple Avenue',
            line2: 'Kensington, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Ryan Martinez specializes in reproductive health, offering treatments ranging from fertility care to menopause management. His personalized approach ensures patient comfort and well-being.',
        fees: 70,
        address: {
            line1: '11th Lane, Park Crescent',
            line2: 'Westminster, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '3 Years',
        about: 'Dr. Amelia Hill focuses on both medical and cosmetic dermatology, offering treatments for skin conditions as well as procedures like laser therapy and anti-aging solutions.',
        fees: 60,
        address: {
            line1: '99th Avenue, Sunset Boulevard',
            line2: 'Covent Garden, London'
        }
    },
];
