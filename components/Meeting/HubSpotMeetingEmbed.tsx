import React, { useEffect } from 'react';

const HubSpotMeetingEmbed: React.FC = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="meetings-iframe-container" data-src="https://meetings-eu1.hubspot.com/torbjoern-grimstad?embed=true"></div>
    );
};

export default HubSpotMeetingEmbed;
