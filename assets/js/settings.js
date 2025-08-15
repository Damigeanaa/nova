        if (!localStorage.getItem('defaultSource')) {
            localStorage.setItem('defaultSource', 'embedsu');
        }
        if (localStorage.getItem('showParticles') === null) {
            localStorage.setItem('showParticles', 'true');
        }
        if (localStorage.getItem('showUpdateNotice') === null) {
            localStorage.setItem('showUpdateNotice', 'true');
        }
        if (localStorage.getItem('showPopupReminder') === null) {
            localStorage.setItem('showPopupReminder', 'true');
        }
        if (localStorage.getItem('showDonationBanner') === null) {
            localStorage.setItem('showDonationBanner', 'true');
        }
