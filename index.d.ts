// Type definitions for SweetAlert 1.3.0

declare var sweetAlert: SweetAlert2.SweetAlertStatic;
declare var swal: SweetAlert2.SweetAlertStatic;

declare module "sweetalert2" {
    export = swal;
}

declare module SweetAlert2 {
    interface SweetAlertOptions {

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
         * 	A HTML description for the modal. If "text" and "html" parameters are provided in the same time, "text" will be used.
         * 	Default: null
         */
        html?: string;


        /**
         * 	The type of the modal. SweetAlert2 comes with 5 built-in types which will show a corresponding icon animation: warning, error, success, info and question. It can either be put in the array under the key type or passed as the third parameter of the function.
         * Default: null
         */
        type?: string;
    }


    /**
     * Is true or false if the user confirms or cancels the alert. Except for the type "input", then when the user confirms the alert, this variable contains the value of the input element.
     */
    type CallbackArgument = boolean | string;

    interface SweetAlertStatic {
        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         */
        (title: string): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         * @param text A description for the modal.
         */
        (title: string, text: string): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         * @param text A description for the modal.
         * @param type The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
         */
        (title: string, text: string, type: string): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param callback The callback from the users action. The value is true or false if the user confirms or cancels the alert. Except for the type "input", then when the user confirms the alert, the argument contains the value of the input element.
         */
        (settings: SweetAlertOptions, callback?: (isConfirmOrInputValue: CallbackArgument) => any): Promise<boolean>;


        /**
         * If you end up using a lot of the same settings when calling SweetAlert, you can use setDefaults at the start of your program to set them once and for all!
         */
        setDefaults(settings: SweetAlertOptions): void;
    }
}
