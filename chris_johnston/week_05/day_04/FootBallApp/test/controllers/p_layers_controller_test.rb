require 'test_helper'

class PLayersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get p_layers_index_url
    assert_response :success
  end

  test "should get show" do
    get p_layers_show_url
    assert_response :success
  end

  test "should get new" do
    get p_layers_new_url
    assert_response :success
  end

  test "should get edit" do
    get p_layers_edit_url
    assert_response :success
  end

end
