'use client';

import styles from './style.module.scss';
import Title from '@/components/typography/Title';
import Container from '@/components/layout/Contaienr';
import Text from '@/components/typography/Text';
import TicketGeneratorForm from '@/components/form/TicketGeneratorForm';
import { FormProvider } from 'react-hook-form';
import { useTicketGenerator } from '@/hooks/useTicketGenerator';
import Ticket from '@/components/element/Ticket';
import cn from 'classnames';

export default function Home() {
    const { methods, onSubmit, ticketInfo } = useTicketGenerator({
        title: 'Coding Conf',
        location: 'Jan 31, 2025 / Austin, TX',
    });

    return (
        <>
            <main>
                <Container className={styles.container}>
                    <div className={styles.circle}></div>
                    <div className={styles.line2}></div>
                    <Container className={styles.wrapper}>
                        {!ticketInfo ? (
                            <>
                                <header className={styles.header}>
                                    <Title color={'color-neutral-000'}
                                           align={'center'}
                                    >
                                        Your Journey to Coding Conf 2025 Starts Here!
                                    </Title>
                                    <Text preset={'text-preset-4'}
                                          align={'center'}
                                    >
                                        Secure your spot at next year’s biggest coding conference.
                                    </Text>
                                </header>

                                <FormProvider {...methods}>
                                    <TicketGeneratorForm onSubmit={methods.handleSubmit(onSubmit)} />
                                </FormProvider>
                            </>
                        ) : (
                            <>
                                <header className={cn(styles.header, styles.resultHeader)}>
                                    <Title color={'color-neutral-000'}
                                           align={'center'}
                                    >
                                        Congrats, <Text preset={'text-preset-1'}
                                                        color={'color-gradient-001'}
                                                        gradient
                                    >
                                        {ticketInfo.fullName}
                                    </Text>!
                                        Your ticket is ready.
                                    </Title>
                                    <Text preset={'text-preset-4'}
                                          align={'center'}
                                    >
                                        We've emailed your ticket to <Text preset={'text-preset-4'}
                                                                           color={'color-orange-500'}
                                    >{ticketInfo.email}</Text> and will send updates in the run up
                                        to the event.
                                    </Text>
                                </header>

                                <Ticket {...ticketInfo} />
                            </>
                        )}
                    </Container>
                </Container>
            </main>
        </>
    );
}
