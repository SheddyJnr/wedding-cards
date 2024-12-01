export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface WeddingGuestI {
    id: number;
    title: string;
    name: string;
    phone: string;
    invitation_link: string;
    rsvp: number;
}
