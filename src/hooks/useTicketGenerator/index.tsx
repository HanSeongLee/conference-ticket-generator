import { useForm } from 'react-hook-form';
import { ITicketGeneratorForm } from '@/components/form/TicketGeneratorForm';
import { useState } from 'react';
import { ITicketInfo } from '@/components/element/Ticket';

interface ITicketGeneratorProps {
    title: string;
    location: string;
}

export const useTicketGenerator = ({ title, location }: ITicketGeneratorProps) => {
    const methods = useForm<ITicketGeneratorForm>();
    const [ticketInfo, setTicketInfo] = useState<ITicketInfo & { email: string } | null>(null);

    const generateTicketNumber = () => {
        const ticketNumber = Math.floor(Math.random() * 10000).toString();
        return ticketNumber.padStart(5, '0');
    };

    const onSubmit = (data: ITicketGeneratorForm) => {
        const { fullName, githubUsername, uploadAvatar, email } = data;
        const ticketNumber = generateTicketNumber();
        const avatar = URL.createObjectURL(uploadAvatar[0]);

        setTicketInfo({
            title,
            location,
            ticketNumber,
            fullName,
            githubUsername,
            avatar,
            email,
        });
    };

    return {
        methods,
        onSubmit,
        ticketInfo,
    };
};
