module ApplicationHelper
    def flash_messages
        flash.map do |success, value|
            { success: value }
        end
    end
end
