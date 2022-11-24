import { IAboutCard } from "../model/model";
import moneyImg from '../image/money_duotone.svg'
import calendarImg from '../image/calendar_duotone.svg'
import clockImg from '../image/clock_duotone.svg'
import bagImg from '../image/bag_duotone.svg'
import cardImg from '../image/card_duotone.svg'

export const aboutCard: IAboutCard[] = [
    {
        id: '1',
        img: moneyImg,
        title: 'Up to 50 000 ₽',
        description: 'Cash and transfers without commission and percent'
    },
    {
        id: '2',
        img: calendarImg,
        title: 'Up to 160 days',
        description: 'Without percent on the loan'
    },
    {
        id: '3',
        img: clockImg,
        title: 'Free delivery',
        description: 'We will deliver your card by courier at a convenient place and time for you'
    },
    {
        id: '4',
        img: bagImg,
        title: 'Up to 12 months',
        description: 'No percent. For equipment, clothes and other purchases in installments'
    },
    {
        id: '5',
        img: cardImg,
        title: 'Convenient deposit and withdrawal',
        description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards'
    },

]

