// Type definitions for SweetAlert 1.3.0

/**
 * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
 * @param title The title of the modal.
 */
declare function swal(title: string): Promise<boolean>;

/**
 * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
 * @param title The title of the modal.
 * @param text A description for the modal.
 */
declare function swal(title: string, text: string): Promise<boolean>;

/**
 * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
 * @param title The title of the modal.
 * @param text A description for the modal.
 * @param type The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
 */
declare function swal(title: string, text: string, type: 'warning' | 'error' | 'success' | 'info' | 'question'): Promise<boolean>;

/**
 * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
 * @param callback The callback from the users action. The value is true or false if the user confirms or cancels the alert. Except for the type "input", then when the user confirms the alert, the argument contains the value of the input element.
 */
declare function swal(settings: swal.SweetAlertOptions): Promise<boolean>;

declare namespace swal {
    export interface SweetAlertOptions {

        /**
         * The title of the modal. It can either be added to the object under the key "title" or passed as the first parameter of the function.
         * Default: null
         */
        title?: string;
        /**
         * A description for the modal.
         * Default: null
         */
        text?: string;

        /**
         * A HTML description for the modal. If "text" and "html" parameters are provided in the same time, "text" will be used.
         * Default: null
         */
        html?: string;

        /**
         * The type of the modal. SweetAlert2 comes with 5 built-in types which will show a corresponding icon animation: warning, error, success, info and question. It can either be put in the array under the key type or passed as the third parameter of the function.
         * Default: null
         */
        type?: 'warning' | 'error' | 'success' | 'info' | 'question';

        /**
         * A custom CSS class for the modal.
         * Default: null
         */
        customClass?: string;

		/**
         * Defines the type of input to show on the sweetalert
         * Default: null
         */
        input?: string;

		/**
		 * If set to true, loader icon will display on confirmation
		 * Default: false
		 */
		showLoaderOnConfirm?: boolean;

		/**
		 * Function which is executed before confirmation
		 * Default: null
		 */
		preConfirm?: Function;

        /**
         * If set to false, modal CSS animation will be disabled.
         * Default: true
         */
        animation?: boolean;

        /**
         * If set to false, the user can't dismiss the modal by clicking outside it.
         * Default: true
         */
        allowOutsideClick?: boolean;

        /**
         * If set to false, the user can't dismiss the modal by pressing the Escape key.
         * Default: true
         */
        allowEscapeKey?: boolean;

        /**
         * If set to false, a "Confirm"-button will not be shown. It can be useful when you're using html parameter for custom HTML description.
         * Default: true
         */
        showConfirmButton?: boolean;

        /**
         * If set to true, a "Cancel"-button will be shown, which the user can click on to dismiss the modal.
         * Default: false
         */
        showCancelButton?: boolean;

        /**
         * Use this to change the text on the "Confirm"-button.
         * Default: "OK"
         */
        confirmButtonText?: string;

        /**
         * Use this to change the text on the "Cancel"-button.
         * Default: "Cancel"
         */
        cancelButtonText?: string;

        /**
         * Use this to change the background color of the "Confirm"-button (must be a HEX value).
         * Default: "#3085d6"
         */
        confirmButtonColor?: string;

        /**
         * Use this to change the background color of the "Cancel"-button (must be a HEX value).
         * Default: "#aaa"
         */
        cancelButtonColor?: string;

        /**
         * A custom CSS class for the "Confirm"-button.
         * Default: null
         */
        confirmButtonClass?: string;

        /**
         * A custom CSS class for the "Cancel"-button.
         * Default: null
         */
        cancelButtonClass?: string;

        /**
         * Apply default swal2 styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to false.
         * Default: true
         */
        buttonStyling?: boolean;

        /**
         * Set this parameter to true if you want to invert default buttons positions.
         * Default: false
         */
        reverseButtons?: boolean;

        /**
         * Set this parameter to true to show close button in top right corner of the modal.
         * Default: false
         */
        showCloseButton?: boolean;

        /**
         * 	Set to false if you want the modal to stay open even if the user presses the "Confirm"-button.
         * 	This is especially useful if the function attached to the "Confirm"-button is another SweetAlert2.
         * Default: true
         */
        closeOnConfirm?: boolean;

        /**
         * Add a customized icon for the modal. Should contain a string with the path or URL to the image.
         * Default: null
         */
        imageUrl?: string;

        /**
         * If imageUrl is set, you can specify imageWidth to describes image width in px.
         * Default: null
         */
        imageWidth?: number;

        /**
         * Custom image height in px.
         * Default: null
         */
        imageHeight?: number;

        /**
         * A custom CSS class for the customized icon.
         * Default: null
         */
        imageClass?: string;

        /**
         * Auto close timer of the modal. Set in ms (milliseconds).
         * Default: null
         */
        timer?: number;

        /**
         * Modal window width, including paddings (box-sizing: border-box).
         * Default: 500
         */
        width?: number;

        /**
         * Modal window padding.
         * @type Default: number
         */
        padding?: number;

        /**
         * Modal window background (CSS background property).
         * @type Default: "#fff"
         */
        background?: string;
	
		/**
         * Input validator (Promise function)
         * Default: null
         */
        inputValidator?: Function;
    }

    /**
     * If you end up using a lot of the same settings when calling SweetAlert, you can use setDefaults at the start of your program to set them once and for all!
     */
    export function setDefaults(settings: SweetAlertOptions): void;
}

export = swal;
