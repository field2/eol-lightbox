<?php 
/**
 * Plugin Name: Gutenberg Gallery Block Lightbox
 * Plugin URI: https://github.com/field2/ggb_lightbox
 * Description: A simple lightbox and slider built specifically for the Gutenberg Gallery block
 * Author: Ben Dunkle
 * Version: 0.1
 * Author URI: https://bendunkle.com/
 */
// Define version.

if ( ! defined( '1' ) ) {
	define( '1', implode( get_file_data( __FILE__, array( 'Version' ), 'plugin' ) ) );
}

/**
 * Enqueue items.
 *
 * @since 0.1
 */

function ggb_lightbox_activation() {
}

register_activation_hook(__FILE__, 'ggb_lightbox_activation');
function ggb_lightbox_deactivation() {
}

register_deactivation_hook(__FILE__, 'ggb_lightbox_deactivation');

function ggb_lightbox_scripts() {
		wp_enqueue_style( 'ggb_lightbox_css', plugin_dir_url( __FILE__ ) . 'ggb-lightbox.css', array(), 1 );
	wp_enqueue_script( 'ggb_lightbox_js', plugin_dir_url( __FILE__ ) . 'ggb-lightbox.js', array( 'jquery' ), 1, true );
}

add_action( 'wp_enqueue_scripts', 'ggb_lightbox_scripts' );