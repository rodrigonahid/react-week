import styled from "styled-components";

export const ItemContainer = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
    }
`;

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({ url, name }: Props) => {
    return (
        <ItemContainer>
            <img src={url} alt={name} />
            {name}
        </ItemContainer>
    )
}