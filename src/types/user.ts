export type UserData = {
	CrewDetail: {
		UserName?: string;
		CrewId?: number;
		ProfilePhoto?: string;
		Address?: string;
		City?: string | null;
		State?: string | null;
		Company?: string;
		CompanyCode?: string;
		CompanyLogoUrl?: string;
		ErrorMessage?: string;
	};
	Token?: string;
	Status?: string;
	Message?: string;
};
