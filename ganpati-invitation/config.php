<?php
// ─── Site Configuration ───
$siteTitle = "Ganpati Bappa Morya | Makhanchor Ganpati | Rohit Ghadshi";
$metaDescription = "With immense joy and devotion, we invite you to seek the blessings of Lord Ganesha and celebrate Makhanchor Ganpati with us.";
$ogImage = "assets/images/og-image.jpg";

// ─── Host Information ───
$hostName = "Rohit Ghadshi";
$phone = "+91 9833321453";
$phoneDigits = "919833321453";
$venue = "14, Warlikar House, Khotachi Wadi, Girgaon, Mumbai - 400004";

// ─── Family Members ───
$familyMembers = [
    ['name' => 'Rohit Ghadshi', 'relation' => 'Host'],
    ['name' => 'Ghadshi Family', 'relation' => 'Family'],
];

// ─── Event Schedule (कार्यक्रम) ───
$events = [
    [
        'title'    => 'गणपती स्थापना',
        'title_en' => 'Ganpati Sthapana',
        'date'     => '26 August 2026',
        'time'     => 'सकाळी 11:00 वाजता',
        'icon'     => 'fa-om',
        'desc'     => 'श्री गणेश मूर्तीची प्राणप्रतिष्ठा',
    ],
    [
        'title'    => 'सकाळची आरती',
        'title_en' => 'Morning Aarti',
        'date'     => 'Daily',
        'time'     => 'सकाळी 8:00 वाजता',
        'icon'     => 'fa-hands-praying',
        'desc'     => 'रोज सकाळी आरती व दर्शन',
    ],
    [
        'title'    => 'संध्याकाळची आरती',
        'title_en' => 'Evening Aarti',
        'date'     => 'Daily',
        'time'     => 'संध्याकाळी 7:00 वाजता',
        'icon'     => 'fa-fire',
        'desc'     => 'संध्याकाळी महाआरती व प्रसाद',
    ],
    [
        'title'    => 'गणपती विसर्जन',
        'title_en' => 'Ganpati Visarjan',
        'date'     => '5 September 2026',
        'time'     => 'दुपारी 4:00 वाजता',
        'icon'     => 'fa-water',
        'desc'     => 'गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या!',
    ],
];

// ─── Countdown Target ───
$countdownDate = '2026-08-26T11:00:00+05:30';

// ─── Helper Functions ───
function googleMapsSearchUrl($address) {
    return "https://www.google.com/maps/search/" . urlencode($address);
}

function googleMapsEmbedUrl($address) {
    return "https://maps.google.com/maps?q=" . urlencode($address) . "&output=embed";
}
?>
