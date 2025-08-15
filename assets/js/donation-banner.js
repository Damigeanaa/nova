const showDonationBanner = localStorage.getItem('showDonationBanner') !== 'false';
const banner = document.getElementById('donationBanner');

if (!showDonationBanner && banner) {
    banner.style.display = 'none';
}

const closeBannerButton = document.getElementById('closeBanner');
if (closeBannerButton) {
    closeBannerButton.addEventListener('click', function() {
        if (banner) {
            banner.style.display = 'none';
        }
        localStorage.setItem('showDonationBanner', 'false');
    });
}
