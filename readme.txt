=== Woocommerce Super Simple Tax Exemption ===
Contributors: (seangreen, poldira)
Donate link: http://mkt.com/bobbie-wilson/woocommerce-super-simple-tax-exemption-donate
Tags: woocommerce, no tax, tax exempt, tax exempt ID, tax-exempt, checkout
Requires at least: 3.5
Tested up to: 3.8
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A plugin to add simple tax exemption to the Woocommerce checkout page. Records the Tax Exempt ID to the order meta.

== Description ==

This simple plugin will update the Woocommerce checkout page totals to remove calculated taxes. Adds the user input Tax Exempt ID to the order meta for easy tracking.

== Installation ==


1. Upload the directory `woocommerce-super-simple-tax-exempt` to the `/wp-content/plugins/` directory or upload the zip file using the 'Uploads' feature in the Plugins dashboard.
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= I don't see the checkout page totals updating. What am I missing? =

This could be many things. What stumped me at first, was that all the fields needs to be completed before the checkout page will calculate anything. Make sure that Tax Exempt ID has something in it. If none of these work, double-check your tax settings in Woocommerce.


== Changelog ==
= 1.1 = // Sean
* Added online VAT check (Javascript Based) with http://vatid.eu/check/
* Added Localization + German Language Files

= 1.0 =
* First version. Woot!