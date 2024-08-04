import * as React from 'react';

import logopng from '../images/logo.png';
import logowebp from '../images/logo.webp';
import logoavif from '../images/logo.avif';
import profile3196jpg from '../images/profile-3196.jpg';
import profile1598jpg from '../images/profile-1598.jpg';
import profile1065jpg from '../images/profile-1065.jpg';
import profile799jpg from '../images/profile-799.jpg';
import profile3196webp from '../images/profile-3196.webp';
import profile1598webp from '../images/profile-1598.webp';
import profile1065webp from '../images/profile-1065.webp';
import profile799webp from '../images/profile-799.webp';
import profile3196avif from '../images/profile-3196.avif';
import profile1598avif from '../images/profile-1598.avif';
import profile1065avif from '../images/profile-1065.avif';
import profile799avif from '../images/profile-799.avif';

interface PictureProps {
    picture: {
        image: string,
        imageSizeMobile: string,
        imageSizeNormal: string,
        className: string,
        altText: string,
        imageWidth: string,
        imageHeight: string,
        imageSize?: string,
        isMobile: boolean
    }
}

export const Picture = (props: PictureProps) => {
    const picture = props.picture;

    var imageSize: string
    var jpgSrcSet: string
    var webpSrcSet: string
    var avifSrcSet: string
    var defaultImage: any
    imageSize = picture.isMobile ? imageSize = picture.imageSizeMobile : imageSize = picture.imageSizeNormal;

    const logoPngSrcSet = logopng;
    const logoWebpSrcSet = logowebp;
    const logoAvifSrcSet = logoavif;
    const profileJpgSrcSet =
        profile3196jpg + " 3196w, " +
        profile1598jpg + " 1598w, " +
        profile1065jpg + " 1065w, " +
        profile799jpg + " 799w";
    const profileWebpSrcSet =
        profile3196webp + " 3196w, " +
        profile1598webp + " 1598w, " +
        profile1065webp + " 1065w, " +
        profile799webp + " 799w";
    const profileAvifSrcSet =
        profile3196avif + " 3196w, " +
        profile1598avif + " 1598w, " +
        profile1065avif + " 1065w, " +
        profile799avif + " 799w";

    jpgSrcSet = picture.image === "profile" ? jpgSrcSet = profileJpgSrcSet :
        picture.image === "logo" ? jpgSrcSet = logoPngSrcSet : jpgSrcSet = "";
    webpSrcSet = picture.image === "profile" ? webpSrcSet = profileWebpSrcSet :
        picture.image === "logo" ? webpSrcSet = logoWebpSrcSet : webpSrcSet = "";
    avifSrcSet = picture.image === "profile" ? avifSrcSet = profileAvifSrcSet :
        picture.image === "logo" ? avifSrcSet = logoAvifSrcSet : avifSrcSet = "";

    defaultImage = picture.image === "profile" ? defaultImage = profile799jpg :
        picture.image === "logo" ? defaultImage = logopng : defaultImage = "";

    return <picture>
        <source
            type="image/avif"
            sizes={imageSize}
            srcSet={avifSrcSet}
        />
        <source
            type="image/webp"
            sizes={imageSize}
            srcSet={webpSrcSet}
        />
        <img className={picture.className}
            src={defaultImage}
            alt={picture.altText}
            width={picture.imageWidth}
            height={picture.imageHeight}
            sizes={picture.imageSize}
            srcSet={jpgSrcSet}
        />
    </picture>
}