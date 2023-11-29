import Head from 'next/head';

const getTitle = (title: string) => `NFT | ${title}`;

type Props = {
	title: string;
	description?: string;
};

const Meta = ({ title, description }: Props) => {
	return (
		<Head>
			<title>{getTitle(title)}</title>
			{description ? (
				<>
					<meta
						name='description'
						content={description}
					/>
					<meta
						name='og:title'
						content={getTitle(title)}
					/>
					<meta
						name='og:description'
						content={description}
					/>
				</>
			) : (
				<meta
					name='robots'
					content='noindex, nofollow'
				/>
			)}
		</Head>
	);
};

export default Meta;
