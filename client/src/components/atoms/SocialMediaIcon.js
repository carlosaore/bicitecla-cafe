import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
    width: 50%;
    max-width: 300px;
    margin: 2.5% auto;
`

const SocialMediaIcon = styled.img`
	width: 45%;
	margin-right: 10%;

    :last-of-type {
        margin-right: 0;
    }

	:hover {
		filter: brightness(0) saturate(100%) invert(51%) sepia(49%) saturate(501%) hue-rotate(86deg) brightness(95%) contrast(93%);
	}
`;

const SocialMedia = () => (
    <>
        <SocialMediaWrapper>
            <SocialMediaIcon src="./images/facebook-logo.png" alt="" />
            <SocialMediaIcon src="./images/instagram-logo.png" alt="" /> 
        </SocialMediaWrapper>
        <SocialMediaWrapper>
            <SocialMediaIcon src="./images/twitter-logo.png" alt="" />
            <SocialMediaIcon src="./images/linkedin-logo.png" alt="" /> 
        </SocialMediaWrapper>
    </>
);

export default SocialMedia;