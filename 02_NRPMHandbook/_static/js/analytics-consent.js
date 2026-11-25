(() => {
    const measurementId = "G-FRRDTYGBJE";
    const preferenceKey = "handbook-analytics-consent";
    const disableFlag = `ga-disable-${measurementId}`;
    let tagStarted = false;

    function readPreference() {
        try {
            const saved = window.localStorage.getItem(preferenceKey);
            return saved === "granted" || saved === "denied" ? saved : null;
        } catch {
            return null;
        }
    }

    function startAnalytics() {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag("consent", "default", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
        });
        window.gtag("consent", "update", { analytics_storage: "granted" });
        window.gtag("js", new Date());
        window.gtag("config", measurementId);

        const tag = document.createElement("script");
        tag.async = true;
        tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.append(tag);
        tagStarted = true;
    }

    function applyPreference(preference) {
        const granted = preference === "granted";
        window[disableFlag] = !granted;

        if (tagStarted) {
            window.gtag("consent", "update", {
                analytics_storage: granted ? "granted" : "denied",
            });
        } else if (granted) {
            startAnalytics();
        }
    }

    let preference = readPreference();
    applyPreference(preference);

    document.addEventListener("DOMContentLoaded", () => {
        const footer = document.querySelector(".extra_footer, .bd-footer") ?? document.body;
        footer.insertAdjacentHTML("beforeend", `
            <button type="button" id="analytics-preferences" class="btn btn-link btn-sm"
                    aria-controls="analytics-consent" aria-expanded="false">Cookie preferences</button>
            <section id="analytics-consent" class="analytics-consent" aria-labelledby="analytics-consent-title"
                     tabindex="-1" hidden>
                <h2 id="analytics-consent-title">Analytics cookies</h2>
                <p>We use optional cookies for website analytics. You can change your choice at any time in Cookie preferences.</p>
                <details class="analytics-consent-details">
                    <summary>Cookie details</summary>
                    <p>Google Analytics receives usage data such as page views. Its analytics cookies expire after two years by default.
                        <a href="https://policies.google.com/technologies/partner-sites">How Google uses this data</a>
                    </p>
                </details>
                <div class="analytics-consent-actions">
                    <button type="button" class="btn btn-primary" data-analytics-consent="granted">Accept analytics</button>
                    <button type="button" class="btn btn-outline-primary" data-analytics-consent="denied">Decline analytics</button>
                </div>
            </section>
        `);
        const banner = document.getElementById("analytics-consent");
        const preferences = document.getElementById("analytics-preferences");
        let openedFromPreferences = false;

        function setBannerOpen(open) {
            banner.hidden = !open;
            preferences.setAttribute("aria-expanded", String(open));
        }

        function closeBanner() {
            setBannerOpen(false);
            if (openedFromPreferences) {
                preferences.focus({ preventScroll: true });
                openedFromPreferences = false;
            }
        }

        function updatePreference(choice) {
            if (choice !== preference) {
                preference = choice;
                applyPreference(preference);
            }
        }

        for (const button of banner.querySelectorAll("[data-analytics-consent]")) {
            button.addEventListener("click", () => {
                const choice = button.dataset.analyticsConsent;
                try {
                    window.localStorage.setItem(preferenceKey, choice);
                } catch {
                    // The choice still applies on this page when storage is unavailable.
                }
                updatePreference(choice);
                closeBanner();
            });
        }

        preferences.addEventListener("click", () => {
            if (banner.hidden) {
                openedFromPreferences = true;
                setBannerOpen(true);
                banner.focus({ preventScroll: true });
            } else {
                closeBanner();
            }
        });

        banner.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeBanner();
            }
        });

        window.addEventListener("storage", (event) => {
            if (event.key === preferenceKey || event.key === null) {
                updatePreference(readPreference());
                if (preference === null) {
                    setBannerOpen(true);
                } else {
                    closeBanner();
                }
            }
        });

        setBannerOpen(preference === null);
    });
})();
