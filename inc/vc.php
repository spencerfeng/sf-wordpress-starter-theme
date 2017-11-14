<?php
/**
 * Customise Visual Composer
 *
 * @package SF_WordPress_Starter_Theme
 */

/**
 * Remove 'Full Width' parameter from visual composer vc_row shortcode
 */
if (function_exists('vc_remove_param')) {

    vc_remove_param('vc_row', 'full_width');

}

/**
 * Add 'Type' parameter to visual composer vc_row shortcode
 */
if (function_exists('vc_add_param')) {

    $attributes = array(
        'type' => 'dropdown',
        'heading' => 'Type',
        'param_name' => 'type',
        'value' => array('In Container', 'Full Width Background', 'Full Width Content'),
    );

    vc_add_param('vc_row', $attributes);

}